import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab, TabPane } from 'react-bootstrap'
import QuestionPreview from './QuestionPreview'

class HomePage extends Component {
  render() {
    const { questions, users, loggedIn } = this.props
    const user = users[loggedIn]

    const sortQuestions = (a, b) => questions[b].timestamp - questions[a].timestamp

    const answeredQuestions = Object.keys(user.answers).sort(sortQuestions)
    const allQuestions = Object.keys(questions)
    const unansweredQuestions = allQuestions.filter(q => !answeredQuestions.includes(q)).sort(sortQuestions)

    return (
      <div className='row'>
        <div className='col-12 my-5'>
          <Tabs defaultActiveKey='unanswered' className='nav-fill'>

            <Tab eventKey='unanswered' title='Unanswered' className='border'>
              <TabPane>
                {unansweredQuestions.map(q => (
                  <QuestionPreview key={q} id={q} />
                ))}
              </TabPane>
            </Tab>

            <Tab eventKey='answered' title='Answered' className='border'>
              <TabPane>
                {answeredQuestions.map(q => (
                  <QuestionPreview key={q} id={q} />
                ))}
              </TabPane>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect(({ users, questions, loggedIn }) => ({
  questions,
  users,
  loggedIn
}))(HomePage)