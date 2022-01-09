import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import Answered from './Answered'
import Unanswered from './Unanswered'
import { Redirect } from 'react-router-dom'

class Question extends Component {
  render() {
    const { questions, users, match, loggedIn } = this.props
    if(questions[match.params.id] === undefined) {
      return <Redirect to='/404' />
    }

    const question = questions[match.params.id],
      author = users[question.author],
      totalVotes = [...question.optionOne.votes, ...question.optionTwo.votes],
      isAnswered = totalVotes.includes(loggedIn)

    return (
      <div className='row'>
        <div className='col-6 mx-auto my-5'>
          <Card>
            <Card.Header as='h4'> {author.name} asks: </Card.Header>
            <Card.Body className='d-flex'>
              <div className='col-5 text-center border-right'>
                <img
                  src={author.avatarURL}
                  alt={author.name}
                  height='150'
                  width='150'
                  className='rounded-circle'
                />
              </div>

              {
                isAnswered
                  ? <Answered question={question} totalVotes={totalVotes} />
                  : <Unanswered question={question} />
              }
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

function mapStoreToProps({ questions, users, loggedIn }, props) {
  return {
    questions,
    users,
    loggedIn
  }
}

export default connect(mapStoreToProps)(Question)