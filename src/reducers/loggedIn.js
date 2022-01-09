import { SET_USER, LOGOUT } from '../actions/loggedIn'

export default function loggedIn(state = null, action) {
  switch(action.type) {
    case SET_USER:
      return action.user

    case LOGOUT:
      return null

    default:
      return state
  }
}