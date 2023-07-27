import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import QuizApp from './components/QuizApp'
import AdminPage from './components/Admin'

const App = () => {
  const [quizTaker, setQuizTaker] = useState('')

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home setQuizTaker={setQuizTaker} />}
        />
        <Route
          exact
          path="/quiz"
          render={() => <QuizApp quizTaker={quizTaker} />}
        />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  )
}

export default App
