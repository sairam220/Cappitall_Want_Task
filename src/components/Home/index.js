import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Home = ({setQuizTaker}) => {
  const [name, setName] = useState('')
  const [errorMsg, setErrMsg] = useState('')
  const [showErrMsg, setShowErrMsg] = useState(false)

  const history = useHistory()

  const handleStartQuiz = () => {
    if (name === '') {
      setShowErrMsg(true)
      setErrMsg('Please Enter Your Name')
    } else {
      setQuizTaker(name)
      history.push('/quiz')
    }
  }

  return (
    <>
      <Header />
      <h1 className="heading"> Welcome to the Cappitall Want Quiz</h1>
      <div className="quiz">
        <div className="quiz-container">
          <h2>Cappitall Want Quiz App</h2>
          <div className="flex">
            <TextField
              label="Your Name"
              value={name}
              color="#ffff"
              onChange={e => setName(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className="btn-1"
              onClick={handleStartQuiz}
              ml={10}
            >
              Start Quiz
            </Button>
          </div>
          {showErrMsg && <p className="error_msg">{errorMsg}</p>}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
