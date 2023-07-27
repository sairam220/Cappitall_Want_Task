# Quiz App

The Quiz App is a dynamic web application built using React. It fetches questions and choices from the Quiz API and allows users to take a quiz. The app displays each question one by one with multiple-choice options. Users can select an answer for each question and proceed to the next question. Once the user completes the quiz, the app displays the results, showing the number of correct answers and the percentage score.

## Features

- Fetches questions and choices from the Quiz API.
- Displays questions one by one with multiple-choice options.
- Allows users to select an answer for each question.
- Prevents users from traversing back and changing choices after completing the quiz.
- Displays the quiz taker's name and progress (e.g., 2/5) during the quiz.
- Shows the final result at the end of the quiz.
- Admin view to see questions, answers, test takers, and scores (Not implemented in this version).

## Getting Started

To run the Quiz App on your local machine, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Install the required dependencies by running `npm install`.
3. Replace `'YOUR_QUIZAPI_KEY'` in `QuizApp.js` with your actual Quiz API key. (Sign up at https://quizapi.io/ to get the API key.)
4. Start the development server with `npm start`.
5. Open your web browser and go to `http://localhost:3000` to view the app.

## Folder Structure

The project files are organized as follows:

- `src`
  - `QuizApp.js`: The main component that handles the quiz functionality and API communication.
  - `QuizApp.css`: The CSS file for styling the QuizApp component.
  - `App.js`: The main application component that renders the QuizApp component.
  - `App.css`: The CSS file for styling the App component.
  - `index.js`: The entry point of the application.
  - `index.css`: The global CSS file for the entire application.

## Dependencies

The app uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- Axios: A popular HTTP client for making API requests.

## Acknowledgements

The Quiz App is based on the assignment requirements and uses the free APIs provided by Quiz API (https://quizapi.io/).

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
