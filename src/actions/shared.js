import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, addAnswerToUser, addUserQuestion } from './users'
import { receiveQuestions, addAnswerToQuestion, addNewQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialRequest() {
  return (dispatch) => {
    dispatch(showLoading())
    getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function saveAnswer(userId, qId, selectedOption) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestionAnswer(userId, qId, selectedOption)
      .then(() => {
        dispatch(addAnswerToQuestion(userId, qId, selectedOption))
        dispatch(addAnswerToUser(userId, qId, selectedOption))
        dispatch(hideLoading())
      })
      .catch(() => {
        alert('Some error occurred')
        dispatch(hideLoading())
      })
  }
}

export function addQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    dispatch(showLoading())

    const { loggedIn } = getState()

    return saveQuestion(optionOne, optionTwo, loggedIn)
      .then((question) => {
        dispatch(addNewQuestion(question))
        dispatch(addUserQuestion(loggedIn, question.id))
      })
      .then(() => dispatch(hideLoading()))
  }
}