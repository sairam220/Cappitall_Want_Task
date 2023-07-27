import {useState} from 'react'
import {TextField, Button} from '@material-ui/core'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const dummyQuestions = [
  {
    id: 1,
    text:
      'Which the the currently accepted best practice method for hashing passwords to hash passwords?',
  },
  {
    id: 2,
    text:
      'Which of the following attribute triggers event when an element gets user Input?',
  },
  {id: 3, text: 'The SQL WHERE clause?'},
  {id: 4, text: 'Can you start two MySQL servers at one PC?'},
  {id: 5, text: 'What are the API versions available?'},
]

const dummyAnswers = [
  {id: 1, text: 'bcrypt()'},
  {id: 2, text: 'Ondata'},
  {id: 3, text: '"Limits the column data that are returned"'},
  {id: 4, text: 'True'},
  {
    id: 5,
    text:
      'Alpha level, Beta level and Stable level. All these version features are in multiple standards.',
  },
]
const dummyTestTakers = [{id: 1, name: 'Sairam'}]
const dummyScores = [{id: 1, value: 4}]

const AdminDashboard = () => {
  const [code, setCode] = useState('')
  const [showErrMsg, setShowErrMsg] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [questions] = useState(dummyQuestions)
  const [answers] = useState(dummyAnswers)
  const [testTakers] = useState(dummyTestTakers)
  const [scores] = useState(dummyScores)

  const handleAccess = () => {
    if (code === 'Cappitall Want') {
      setShowResult(true)
      setShowErrMsg(false)
    } else {
      setShowErrMsg(true)
      setCode('')
    }
  }

  const renderFrom = () => (
    <>
      <Header />
      <div className="quiz-container1">
        <p>Enter Access Code</p>
        <div className="flex">
          <TextField
            label="Your Code"
            value={code}
            color="#ffff"
            onChange={e => setCode(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleAccess}
          >
            Submit
          </Button>
        </div>
        {showErrMsg && (
          <p className="error_msg">Please Enter correct access code</p>
        )}
      </div>
      <Footer />
    </>
  )

  const renderSuccessView = () => (
    <>
      <Header />
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>

        <div className="card">
          <h2>Questions</h2>
          <ul>
            {questions.map(question => (
              <li key={question.id}>
                {question.id}) {question.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Answers</h2>
          <ul>
            {answers.map(answer => (
              <li key={answer.id}>
                {answer.id}) {answer.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Test Takers</h2>
          <ul>
            {testTakers.map(testTaker => (
              <li key={testTaker.id}>{testTaker.name}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Scores</h2>
          <ul>
            {scores.map(score1 => (
              <li key={score1.id}>{score1.value}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )

  const renderFinalView = () =>
    showResult ? renderSuccessView() : renderFrom()

  return renderFinalView()
}

export default AdminDashboard
