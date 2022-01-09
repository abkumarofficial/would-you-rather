import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { addQuestion } from '../actions/shared'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e) => {
    const el = e.currentTarget
    const newVal = el.value

    if(el.id === 'optionOne') {
      this.setState(() => ({
        optionOne: newVal
      }))
    } else {
      this.setState(() => ({
        optionTwo: newVal
      }))
    }
  }

  saveQuestion = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    this.props.dispatch(addQuestion(optionOne, optionTwo))
    this.props.history.push('/')
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div className='row'>
        <div className='col-6 mx-auto my-5'>
          <Card>
            <Card.Header
              className='text-capitalized'
              as='h3'
            > Create new question </Card.Header>

            <Card.Body>
              <div> Complete the question: </div>
              <h4 className='mt-5 mb-3'> Would you rather ...</h4>

              <form onSubmit={this.saveQuestion}>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Option One Text Here'
                  id='optionOne'
                  value={optionOne}
                  onChange={this.handleChange}
                />

                <div className='my-3 position-relative text-center'>
                  <hr className='position-absolute w-100' />
                  <div className='py-1'> OR </div>
                </div>

                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Option Two Text Here'
                  id='optionTwo'
                  value={optionTwo}
                  onChange={this.handleChange}
                />

                <button
                  type='submit'
                  className='btn btn-primary form-control mt-3'
                  disabled={optionOne === '' || optionTwo === ''}
                > Submit </button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)