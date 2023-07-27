import {useState, useEffect} from 'react'
import axios from 'axios'
import {Button} from '@material-ui/core'
import {Rings} from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const QuizApp = ({quizTaker}) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [score, setScore] = useState(0)

  const [showErrMsg, setShowErrMsg] = useState(false)
  const [err, setErr] = useState(false)

  const [showResult, setShowResult] = useState(false)

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        'https://quizapi.io/api/v1/questions?apiKey=OlrM9biP8jOvZr1MQu798f15SkjrNGINC3n5DKTZ&limit=7',
      )
      setQuestions(response.data)
    } catch (error) {
      console.error('Error fetching questions:', error)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const handleAnswerSelection = (
    selectedChoice,
    key,
    currentQuestionIndex1,
  ) => {
    if (!userAnswers[currentQuestionIndex]) {
      setUserAnswers(prevAnswers => ({
        ...prevAnswers,
        [currentQuestionIndex]: selectedChoice,
      }))
    }
    if (key === questions[currentQuestionIndex1].correct_answer) {
      setScore(prev => prev + 1)
    }
    setShowErrMsg(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 === questions.length) {
      setShowResult(true)
    } else if (showErrMsg) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
      setErr(false)
    }
    if (!showErrMsg) {
      setErr(true)
    }
  }

  if (questions.length === 0) {
    return (
      <div className="Loader">
        <Rings color="#00BFFF" height={80} width={80} />
      </div>
    )
  }

  const reStartExam = () => {
    setShowResult(false)
    setQuestions([])
    setScore(0)
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    fetchQuestions()
  }

  const currentQuestion = questions[currentQuestionIndex]
  const answers = currentQuestion?.answers || {}

  return (
    <>
      <Header />

      <div className="quiz-app">
        {showResult ? (
          <div className="result-card">
            <h2>Quiz Results</h2>
            <p>{`Hello, ${quizTaker}!`}</p>
            <p>{`You have answered ${score} out of ${questions.length} questions correctly.`}</p>
            <p>{`Your score percentage is ${Math.floor(
              (score / questions.length) * 100,
            )}%`}</p>
            <Button
              style={{
                backgroundColor: 'yellow',
                color: 'black',
              }}
              onClick={reStartExam}
            >
              Restart
            </Button>
          </div>
        ) : (
          <div className="question-card">
            <h2>{`Question ${currentQuestionIndex + 1}`}</h2>
            <h3>{currentQuestion?.question}</h3>
            <ul className="choices-list">
              {Object.entries(answers).map(([key, value]) => (
                <li
                  key={key}
                  className={
                    userAnswers[currentQuestionIndex] === value
                      ? 'selected'
                      : ''
                  }
                  onClick={() =>
                    handleAnswerSelection(value, key, currentQuestionIndex)
                  }
                >
                  {!value ? 'Null' : value}
                </li>
              ))}
            </ul>
            <Button
              style={{
                backgroundColor: 'green',
                color: 'white',
              }}
              onClick={handleNextQuestion}
            >
              Next/Skip
            </Button>
            {err && <p className="error_msg">Please select your option</p>}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default QuizApp
