import {
  HEADER
} from '../../../action/types';

//initialize dashboard state-
const INIT_STATE = {
  label: '',
  background: ''
};
//---------------------------

/**********************
 * Auth user reducers *
 **********************/
const overloading = (state = INIT_STATE, action) => {
  switch (action.type) {

    case HEADER.SET_HEADER:
      return {
        ...state,
        ...action.payload
      };

    default: return { ...state };
  }
}
export default overloading