import React from 'react'
import { ProgressBar } from 'react-bootstrap'

export default function OptionVote(props) {
  const { option, totalVotes } = props
  const percent = ((option.votes.length / totalVotes.length) * 100).toFixed(2)

  return (
    <div className={
      'position-relative rounded-lg border py-2 px-3 mt-3'
      + (option.selected ? ' border-success' : '')
    }>
      {option.selected &&
        <span
          className="badge badge-success position-absolute fixed-top col-3 ml-auto"
        > Selected </span>
      }
      <div className='my-3'> Would you rather {option.text}? </div>

      <ProgressBar
        now={percent}
        label={`${percent}%`}
        className='rounded-pill my-2'
      />

      <div className='text-center p-1'>
        {option.votes.length} out {totalVotes.length} votes
      </div>
    </div>
  )
}
