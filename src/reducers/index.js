import { combineReducers } from 'redux'

import users from './users'
import questions from './questions'
import loggedIn from './loggedIn'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  users,
  questions,
  loggedIn,
  loadingBar: loadingBarReducer
})