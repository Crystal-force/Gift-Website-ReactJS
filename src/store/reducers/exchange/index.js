import {
  EXCANGE
} from '../../../action/types';

//initialize dashboard state-
const INIT_STATE = {
  userInfo: {},
  createStep: 1,
  userList: [],
  exchangeInfo: {},
  wishlist: [],
  wishlistSaved: false
};
//---------------------------

/**********************
 * Auth user reducers *
 **********************/
const overloading = (state = INIT_STATE, action) => {
  switch (action.type) {

    case EXCANGE.USER_INFO:
      return { ...state, userInfo: action.payload };
    case EXCANGE.CREATE_STEP:
      return { ...state, createStep: action.payload };
    case EXCANGE.USER_LIST:
      return { ...state, userList: action.payload };
    case EXCANGE.EXCHANGE_INFO:
      return { ...state, exchangeInfo: action.payload };
    case EXCANGE.WISHLIST:
      return { ...state, wishlist: action.payload.wishlist, wishlistSaved: action.payload.saved };

    default: return { ...state };
  }
}
export default overloading