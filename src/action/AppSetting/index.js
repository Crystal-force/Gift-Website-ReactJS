
import { HEADER } from "../types"

export const setHeader = (label, background) => dispatch => {
  dispatch({
    type: HEADER.SET_HEADER,
    payload: {
      label, background
    }
  })
}