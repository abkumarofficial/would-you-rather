import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/loggedIn'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar(props) {
  const { users, loggedIn, dispatch } = props
  const user = users[loggedIn]
  const history = useHistory()

  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Navbar.Brand> Would You Rather </Navbar.Brand>

      <Navbar.Toggle aria-controls='navbar' />
      <Navbar.Collapse id='navbar'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'> Home </Nav.Link>
          <Nav.Link as={Link} to='/add'> New Question </Nav.Link>
          <Nav.Link as={Link} to='/leaderboard'> Leaderboard </Nav.Link>
        </Nav>
        <Nav className='ml-auto'>
          <Navbar.Text className='mr-3'>
            Hello, {user.name}
            <img
              className='rounded-circle ml-2'
              src={user.avatarURL}
              alt='Avatar'
              height='30'
              width='30'
            />
          </Navbar.Text>
          <Nav.Link onClick={() => {
            dispatch(logout())
            history.push('/')
          }}> Logout </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function mapStoreToProps({ users, loggedIn }) {
  return {
    users,
    loggedIn,
  }
}

export default connect(mapStoreToProps)(NavBar)