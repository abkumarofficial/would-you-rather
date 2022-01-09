import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='row'>
      <div className='col-8 mx-auto my-5'>
        <Jumbotron className='text-center'>
          <h3> Question not found!! </h3>
          <div> Try adding a
            <Link to='/add'> new question </Link>
             or go to
             <Link to='/'> homepage. </Link>
            </div>
        </Jumbotron>
      </div>
    </div>
  )
}

export default Error404