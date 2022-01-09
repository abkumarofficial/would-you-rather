export const RECEIVE_USERS = 'RECEIEVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserQuestion(userId, qId) {
  return {
    type: ADD_USER_QUESTION,
    userId,
    qId
  }
}

export function addAnswerToUser(userId, qId, selectedOption) {
  return {
    type: ADD_USER_ANSWER,
    userId,
    qId,
    selectedOption
  }
}