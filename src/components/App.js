import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { handleInitialRequest } from '../actions/shared'

import SignIn from './SignIn';
import NavBar from './NavBar';
import HomePage from './HomePage'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion';
import Error404 from './Error404'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <Router basename="/react-would-you-rather">
        <Fragment>
          <LoadingBar />

          <div className="container">
            {
              this.props.loading
                ? null
                : this.props.loggedIn
                  ? <Fragment>
                    <NavBar />
                    <Route path='/' exact component={HomePage} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/questions/:id' component={Question} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/404' component={Error404} />
                  </Fragment>
                  : <SignIn />
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect(({ loggedIn, users, questions, loadingBar }) => ({
  loggedIn,
  loading: !(Object.keys(users).length && Object.keys(questions).length) || loadingBar.default
}))(App)