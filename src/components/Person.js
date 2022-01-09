import React from 'react'
import { Card } from 'react-bootstrap'

function Person(props) {
  const { user, calculateTotal } = props
  const { name, avatarURL, answers, questions } = user
  return (
    <Card className='my-5'>
      <Card.Body className='d-flex'>
        <div className='col-3 text-center border-right'>
          <img
            src={avatarURL}
            alt={name}
            height='100'
            width='100'
            className='rounded-circle'
          />
        </div>

        <div className='col-7'>
          <h4 className='mb-4'> {name} </h4>

          <div className='d-flex pb-2 border-bottom'>
            <span> Answered Questions </span>
            <span className='ml-auto'> {Object.keys(answers).length} </span>
          </div>

          <div className='d-flex pt-2'>
            <span> Created Questions </span>
            <span className='ml-auto'> {questions.length} </span>
          </div>
        </div>

        <div className='col-2'>
          <Card className='text-center'>
            <Card.Header> Score </Card.Header>
            <Card.Body>
              <h5 className='rounded-circle bg-light text-primary my-0 p-2'>
                {calculateTotal(user)}
              </h5>
            </Card.Body>
          </Card>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Person