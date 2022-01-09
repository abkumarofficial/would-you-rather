import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {
  render() {
    const { id, questions, users } = this.props
    const question = questions[id]

    const { author, optionOne } = question
    const { name, avatarURL } = users[author]

    return (
      <div className='col-6 mx-auto my-5'>
        <Card>
          <Card.Header as='h4'> {name} asks: </Card.Header>
          <Card.Body className='d-flex'>
            <div className='col-5 text-center border-right'>
              <img
                src={avatarURL}
                alt={name}
                height='150'
                width='150'
                className='rounded-circle'
              />
            </div>
            <div className='col-7'>
              <h5 className='mb-3 text-captilize'> Would you rather </h5>
              <div className='col-6 px-0 mb-5 text-truncate'> {optionOne.text} </div>
              <Link to={`/questions/${id}`}>
                <button
                  className='btn btn-outline-primary form-control'
                > View Poll </button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStoreToProps({ questions, users }, { id }) {
  return {
    id,
    questions,
    users
  }
}

export default connect(mapStoreToProps)(QuestionPreview)