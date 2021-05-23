import { AUTH } from "../types"
import { auth } from '../../firebase/firebase'
import Axios from "axios";
import config from '../../config'
import { setLoading } from "../Overloading";
// import firebaseui from 'firebaseui'

export const signup = (username, email, password) => async dispatch => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await user.sendEmailVerification();
    await user.updateProfile({
      displayName: username
    })
  } catch (error) {
    throw error
  }
}

export const loginFirebase = (email, password) => async dispatch => {
  try {
    dispatch(setLoading(true))
    await Axios.post(`${config.baseURL}/sendMail`, { email })
    dispatch(setLoading(false))
    return true;
    // let { user } = await auth.signInWithEmailAndPassword(email, password);
    // console.log(user);
    // if (!user.emailVerified) {
    //   throw new Error('Please verify your email.')
    // } else {
    //   let { displayName, email, refreshToken, photoURL, phoneNumber } = user;
    //   dispatch({
    //     type: AUTH.LOGIN_USER_SUCCESS,
    //     payload: { displayName, email, refreshToken, photoURL, phoneNumber }
    //   })
    // }
    // auth.onAuthStateChanged(async userAuth => {
    //   // console.log(userAuth);
    //   // dispatch({
    //   //   type: AUTH.LOGIN_USER,
    //   //   payload: { userAuth }
    //   // })
    // });
  } catch (error) {
    throw error
  }

}

export const authenticationCode = (email, authenticateCode) => async dispatch => {
  dispatch(setLoading(true))
  let result = await Axios.post(`${config.baseURL}/checkAuthentication`, { email, authenticateCode })
  if (result.data === true) {
    dispatch({
      type: AUTH.LOGIN_USER_SUCCESS,
      payload: { displayName: email, email }
    })
  }
  dispatch(setLoading(false))
  return result.data;
}

export const loginWithFirebase = () => dispatch => {
  if (auth.currentUser) {
    let { displayName, email, refreshToken, photoURL, phoneNumber } = auth.currentUser;
    dispatch({
      type: AUTH.LOGIN_USER_SUCCESS,
      payload: { displayName, email, refreshToken, photoURL, phoneNumber }
    })
  } else {
    dispatch({
      type: AUTH.LOGIN_USER_FAILURE,
    })
  }
}