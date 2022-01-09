import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA'

export function getUsers() {
  return _getUsers();
}

export function getQuestions() {
  return _getQuestions()
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({optionOneText, optionTwoText, author})
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({authedUser, qid, answer})
}

export function getInitialData() {
  return Promise.all([
    getUsers(),
    getQuestions()
  ])
    .then(([users, questions]) => ({
      users,
      questions
    }))
}