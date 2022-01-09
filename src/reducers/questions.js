import { RECEIVE_QUESTIONS, ADD_QUESTION_ANSWER, ADD_NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }

    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }

    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.qId]: {
          ...state[action.qId],
          [action.selectedOption]: {
            ...state[action.qId][action.selectedOption],
            votes: [
              ...state[action.qId][action.selectedOption].votes,
              action.userId
            ]
          }
        }
      }

    default:
      return state
  }
}