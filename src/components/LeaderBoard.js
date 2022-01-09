import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from './Person'

class LeaderBoard extends Component {
  render() {
    const calculateTotal = (user) => {
      return Object.keys(user.answers).length + user.questions.length
    }

    let { users } = this.props
    users = Object.values(users).sort((user1, user2) => {
      return calculateTotal(user2) - calculateTotal(user1)
    })

    return (
      <div className='row'>
        <div className='col-8 mx-auto'>
          {users.map(user => (
            <Person
              key={user.id}
              user={user}
              calculateTotal={calculateTotal}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default connect(({ users }) => ({
  users
}))(LeaderBoard)