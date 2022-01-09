import React from 'react'
import OptionVotes from './OptionVotes'
import { connect } from 'react-redux'

function Answered(props) {
  const { question, loggedIn } = props,
    optionOne = {
      ...question.optionOne,
      selected: question.optionOne.votes.includes(loggedIn)
    },
    optionTwo = {
      ...question.optionTwo,
      selected: question.optionTwo.votes.includes(loggedIn)
    },
    totalVotes = [...optionOne.votes, ...optionTwo.votes]

  return (
    <div className='col-7'>
      <h5> Results: </h5>

      <OptionVotes
        option={optionOne}
        totalVotes={totalVotes}
      />

      <OptionVotes
        option={optionTwo}
        totalVotes={totalVotes}
      />
    </div>
  )
}

export default connect(({ loggedIn }) => ({
  loggedIn
}))(Answered)