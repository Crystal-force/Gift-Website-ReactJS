import { firestore } from "../../firebase/firebase"
import { EXCANGE } from "../types"
import axios from "axios";
import { setLoading } from "../Overloading";
import config from '../../config'
import moment from "moment";

export const editUserInfo = user => dispatch => {
  dispatch({
    type: EXCANGE.USER_INFO,
    payload: user
  })
  dispatch(createStep(2))
}


export const setUserList = userList => dispatch => {
  dispatch({
    type: EXCANGE.USER_LIST,
    payload: userList
  })
}

export const setExchangeInfo = exchangeInfo => (dispatch, getState) => {
  let store = getState();
  dispatch({
    type: EXCANGE.EXCHANGE_INFO,
    payload: exchangeInfo
  })
  dispatch(createStep(store.exchange.createStep + 1))
}

export const createStep = step => dispatch => {
  dispatch({
    type: EXCANGE.CREATE_STEP,
    payload: step
  })
}

const addUserToFirebase = async data => {
  try {
    let { name, email, telephone, country, icon } = data;
    let { id } = await firestore.collection('users').add({
      name: name || '',
      email: email,
      phone: telephone || '',
      country: country || '',
      icon: icon || 0,
      verified_email: false,
      verified_phone: false,
      created_at: Date.now(),
      updated_at: Date.now()
    });
    return id;
  } catch (error) {
    throw error
  }
}

const addExchange = async data => {
  try {
    let { exchangeType, date, time, range, message, group, types, location } = data;
    let { id } = await firestore.collection('exchanges').add({
      type: types.join(','), venue: exchangeType, date, hour: time, amount: range, status: false, message, group_name: group, location: location
    });
    return id;
  } catch (error) {
    throw error
  }
}

const addUserExchange = async (userId, exchangeId) => {
  try {
    let { id } = await firestore.collection('user_exchange').add({
      userId, exchangeId
    });
    return id;
  } catch (error) {
    throw error
  }
}

const addParticipant = async (exchangeId, userId, name, type) => {
  try {
    let { id } = await firestore.collection('participants').add({
      userId, exchangeId, name: name, participantType: type, isConfirmed: false, confirmationDate: ''
    });
    return id;
  } catch (error) {
    throw error
  }
}

export const createExchange = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true))
    let ids = []
    let { exchange: { userInfo, userList, exchangeInfo } } = getState();
    //create exchange
    let exchangeId = await addExchange(exchangeInfo);
    let participants = [userInfo].concat(userList)
    //create Paticipant
    for (let [index, participant] of participants.entries()) {
      let userId = await addUserToFirebase(participant)
      await addUserExchange(userId, exchangeId)
      let participantId = await addParticipant(exchangeId, userId, participant.name, index === 0 ? 'admin' : '');
      ids.push({
        email: participant.email,
        participantId,
        userName: participant.name
      })
    }
    //send mail
    for (let [index, paticipant] of ids.entries()) {
      await firestore.collection('draws').add({
        exchangeId: exchangeId,
        userFrom: paticipant.participantId,
        userTo: (index < (ids.length - 1)) ? ids[index + 1].participantId : ids[0].participantId
      });
      await sendInviteMail(
        (index > 0) ? "9008011" : "9008032",
        paticipant.participantId,
        exchangeId,
        paticipant.email,
        paticipant.name,
        (index < (ids.length - 1)) ? ids[index + 1] : ids[0]
      )
    }
    return `/confirm-exchange/${ids[0].participantId}/${exchangeId}`
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false))
  }

}



const sendInviteMail = async (templateId, userId, exchangeId, email, userName, toUser) => {
  await axios.post(`${config.baseURL}/sendInvite`, {
    templateId,
    to: email, userName, toUserEmail: toUser.email, toUserName: toUser.name,
    action_url: `http://www.gift2gift.me/confirm-exchange/${userId}/${exchangeId}`
  })
}

export const sendRequestWishlist = (email, participantId, exchangeId) => async dispatch => {
  try {
    dispatch(setLoading(false))
    await axios.post(`${config.baseURL}/sendGiftMail`, {
      to: email,
      body: `please create wishlist\nhttp://www.gift2gift.me/wishlist/${participantId}/${exchangeId}`
    })
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const getExchange = (paticipantId, exchangeId) => async dispatch => {
  try {
    dispatch(setLoading(true))
    let exchangeInfo = await (await firestore.collection('exchanges').doc(exchangeId).get()).data();
    let userInfo = {}, userList = [], isAdmin = false, adminName = '';

    let userParticipant = await firestore.collection('participants').doc(paticipantId).get();
    await firestore.collection('participants').doc(paticipantId).update({
      isConfirmed: true,
      confirmationDate: Date.now()
    })
    if (userParticipant.id) {
      let userParticipantData = await userParticipant.data();
      userInfo = await (await firestore.collection('users').doc(userParticipantData.userId).get()).data();
      if (userParticipantData.participantType === 'admin') isAdmin = true
      let participants = await firestore.collection('participants').where('exchangeId', '==', exchangeId).get();
      if (!participants.empty) {
        for (let doc of participants.docs) {
          if (doc.data().participantType !== 'admin') {
            let user = (await firestore.collection('users').doc(doc.data().userId).get()).data();
            userList.push({
              id: doc.id,
              name: user.name,
              email: user.email,
              telephone: user.phone,
              icon: user.icon,
              checked: doc.data().isConfirmed,
              resendMail: async (email) => await sendInviteMail(doc.id, exchangeId, email)
            });
          } else {
            adminName = doc.data().name
          }
        }
      }
    }
    return {
      exchangeInfo,
      userInfo,
      userList,
      isAdmin,
      adminName
    }
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const getToWishList = (paticipantId, exchangeId) => async dispatch => {
  try {
    dispatch(setLoading(true))
    let draws = await firestore.collection('draws')
      .where('exchangeId', '==', exchangeId)
      .where('userTo', '==', paticipantId).get();
    if (!draws.empty) {
      let userId = draws.docs[0].data().userFrom
      let participant = (await firestore.collection('participants').doc(userId).get()).data();
      let userInfo = (await firestore.collection('users').doc(participant.userId).get()).data();
      let wishlists = await firestore.collection('wishlists')
        .where('exchangeId', '==', exchangeId)
        .where('userId', '==', userId).get();
      let result = [];
      for (let wishlist of wishlists.docs) {
        result.push(wishlist.data());
      }
      return {
        wishlists: result,
        userInfo,
        participantId: userId
      };
    } else {
      return {
        wishlists: [],
        userInfo: {},
        participantId: ''
      }
    }
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const getMyWishList = (userId, exchangeId) => async dispatch => {
  dispatch(setLoading(true))
  try {
    let wishlists = await firestore.collection('wishlists').where('exchangeId', '==', exchangeId).where('userId', '==', userId).get();
    if (wishlists.empty) {
      dispatch({
        type: EXCANGE.WISHLIST,
        payload: { wishlists: [], saved: false }
      })
    } else {
      let result = []
      for (let wishlist of wishlists.docs) {
        result.push(wishlist.data())
      }
      if (result.length < 3) {
        result = result.concat(new Array(3 - result.length).fill({}))
      }
      dispatch({
        type: EXCANGE.WISHLIST,
        payload: { wishlist: result, saved: true }
      })
      return result;
    }
  } catch (error) {
    console.log(error)
    return []
  } finally {
    dispatch(setLoading(false))
  }
}

export const getAmazonProducts = (userId, exchangeId, type) => async dispatch => {
  dispatch(setLoading(true))
  try {
    let userParticipant = await (await firestore.collection('participants').doc(userId).get()).data();
    let userInfo = await (await firestore.collection('users').doc(userParticipant.userId).get()).data();
    const options = {
      method: 'GET',
      url: 'https://rapidapi.p.rapidapi.com/product/search',
      params: { keyword: type, category: 'aps', country: userInfo.country || 'MX' },
      headers: {
        'x-rapidapi-key': '96732dfe9emsh690a735624851c2p1a5f3fjsn3239a57ec8cd',
        'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com'
      }
    };

    let { data: { products } } = await axios.request(options);
    if (Array.isArray(products)) {
      let wishlist = products.map(element => {
        let { url, title, thumbnail, price: { current_price, currency } } = element;
        return { url, title, thumbnail, price: `${current_price}${currency}` }
      })
      wishlist.splice(3)
      return wishlist
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(setLoading(false))
  }
}

export const saveWishlists = (userId, exchangeId, wishlists) => async dispatch => {
  try {
    dispatch(setLoading(true))
    let beforeWishlist = await firestore.collection('wishlists').where('exchangeId', '==', exchangeId).where('userId', '==', userId).get();
    for (let wishlist of beforeWishlist.docs) {
      await wishlist.ref.delete();
    }

    for (let wishlist of wishlists) {
      if (!wishlist) {
        wishlist = {}
      }
      let { url, title, thumbnail, price } = wishlist
      await firestore.collection('wishlists').add({
        exchangeId, userId, url: url || '', title: title || '', thumbnail: thumbnail || '', price: price || ''
      })
    }
    dispatch({
      type: EXCANGE.WISHLIST,
      payload: { wishlist: wishlists, saved: true }
    })
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const getAllExchange = email => async dispatch => {
  try {
    await dispatch(setLoading(true))
    let users = await firestore.collection('users').where('email', '==', email).get()
    let upcoming = [], past = [], canceled = []
    for (let user of users.docs) {
      let participants = await firestore.collection('participants').where('userId', '==', user.id).get()
      for (let participant of participants.docs) {
        let exchangeData = await firestore.collection('exchanges').doc(participant.data().exchangeId).get();
        let exchange = exchangeData.data();
        let userCount = (await firestore.collection('participants').where('exchangeId', '==', participant.data().exchangeId).get()).docs.length;
        let now = Date.now();
        let date = new Date(exchange.date)
        if (date > now) {
          upcoming.push({
            type: participant.data().participantType === 'admin' ? 'Administrator' : 'Participante',
            userCount,
            exchange,
            url:`/confirm-exchange/${participant.id}/${exchangeData.id}`
          })
        } else {
          past.push({
            type: participant.data().participantType === 'admin' ? 'Administrator' : 'Participante',
            userCount,
            exchange,
            url:`/confirm-exchange/${participant.id}/${exchangeData.id}`
          })
        }
      }
    }
    return {
      upcoming, past, canceled
    }
  } catch (error) {
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}
