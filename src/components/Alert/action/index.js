import store from '../store'
import Type from './type'
const openAlert = (title = '', content = '', onAction = () => { }) => {
  store.dispatch({
    type: Type.OPEN_ALERT,
    payload: {
      title, content, onAction
    }
  })
}

export const closeAlert = () => dispatch => {
  dispatch({
    type: Type.CLOSE_ALERT
  })
}
const alertActions = {
  openAlert
}
export default alertActions