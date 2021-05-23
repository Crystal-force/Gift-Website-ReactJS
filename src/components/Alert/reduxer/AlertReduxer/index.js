import Type from '../../action/type'

const initialState = {
  open: false,
  title: '',
  content: '',
  onAction: () => { }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.OPEN_ALERT:
      return {
        ...state,
        open: true,
        ...action.payload
      }
    case Type.CLOSE_ALERT:
      return {
        ...state,
        open: false,
      }
    default:
      return state;
  }
}
export default reducer