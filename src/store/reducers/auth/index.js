import {
  AUTH
} from '../../../action/types';


const {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
} = AUTH;
//initialize auth user state-----------------------------
const INIT_STATE = {
  user: {},
  loading: false
};
//-------------------------------------------------------

/**********************
 * Auth user reducers *
 **********************/
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      // localStorage.setItem(config.userLocalstorage, JSON.stringify(action.payload));
      return { ...state, loading: false, user: action.payload };

    case LOGIN_USER_FAILURE:
      // localStorage.removeItem(config.userLocalstorage);
      return { ...state, loading: false };

    case LOGOUT_USER:
      // localStorage.removeItem(config.userLocalstorage);
      return { ...state, user: null };

    case SIGNUP_USER:
      return { ...state, loading: true };

    case SIGNUP_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case SIGNUP_USER_FAILURE:
      return { ...state, loading: false };

    default: return { ...state };
  }
}

export default reducer