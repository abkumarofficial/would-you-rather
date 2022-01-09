import React, { Component } from 'react'
import { saveAnswer } from '../actions/shared'
import { connect } from 'react-redux'

class Unanswered extends Component {
  state = {
    selectedVal: ''
  }

  updateSelection = (e) => {
    const selectedVal = e.currentTarget.value
    this.setState(() => ({
      selectedVal
    }))
  }

  submitAnswer = (e) => {
    e.preventDefault();

    const { loggedIn, question, dispatch } = this.props
    dispatch(saveAnswer(loggedIn, question.id, this.state.selectedVal))
  }

  render() {
    const { question } = this.props,
      { optionOne, optionTwo } = question

    return (
      <div className='col-7'>
        <h5 className='mb-3 text-capitalize'> Would you rather </h5>

        <form onSubmit={this.submitAnswer}>
          <div className='form-check'>
            <label className='form-check-label my-2'>
              <input
                type='radio'
                className='form-check-input'
                name='questionPoll'
                value='optionOne'
                checked={this.state.selectedVal === 'optionOne'}
                onChange={this.updateSelection}
              />
              {optionOne.text}
            </label>
          </div>

          <div className='form-check'>
            <label className='form-check-label my-2'>
              <input
                type='radio'
                className='form-check-input'
                name='questionPoll'
                value='optionTwo'
                checked={this.state.selectedVal === 'optionTwo'}
                onChange={this.updateSelection}
              />
              {optionTwo.text}
            </label>
          </div>

          <input
            type='submit'
            className='btn btn-primary form-control'
            disabled={this.state.selectedVal === ''}
          />
        </form>
      </div>
    )
  }
}

export default connect(({ loggedIn }) => ({
  loggedIn,
}))(Unanswered)