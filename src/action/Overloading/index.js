import { SET_OVERLOADING } from "../types"

export const setLoading = status => dispatch => {
  dispatch({
    type: SET_OVERLOADING,
    payload: status
  })
}