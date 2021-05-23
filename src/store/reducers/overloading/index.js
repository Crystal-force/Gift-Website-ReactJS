import {
  SET_OVERLOADING
} from '../../../action/types';

//initialize dashboard state-
const INIT_STATE = {
  loading: true
};
//---------------------------

/**********************
 * Auth user reducers *
 **********************/
const overloading = (state = INIT_STATE, action) => {
  switch (action.type) {

    case SET_OVERLOADING:
      return { loading: action.payload };

    default: return { ...state };
  }
}
export default overloading