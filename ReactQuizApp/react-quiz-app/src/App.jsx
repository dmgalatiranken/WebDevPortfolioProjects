import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Score from './components/Score';

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },
  {
    question: "What are error boundaries?",
    options: [
      "Errors with boundaries",
      "Boundaries that have errors",
      "Bugs that are critical and must be fixed as soon as possible",
      "Provide a way for us to catch errors that occur in the render phase"
    ],
    answer: "Provide a way for us to catch errors that occur in the render phase"
  },
  {
    question: "What is React Hooks?",
    options: [
      "A special type of string only used in React",
      "A type of error exclusive to React",
      "Built-in functions that permit developers for using the state and lifecycle methods within React components",
      "Used to debug"
    ],
    answer: "Built-in functions that permit developers for using the state and lifecycle methods within React components"
  },
  {
    question: "What are keys in React?",
    options: [
      "They are used to unlock anything",
      "A special string attribute that needs to be included when using lists of elements",
      "A type of integer",
      "Made for creating/using objects a lot simpler"
    ],
    answer: "A special string attribute that needs to be included when using lists of elements"
  },
  {
    question: "What are props in React?",
    options: [
      "Anything React related",
      "The inputs to a component of React",
      "A type of object",
      "Placeholder items"
    ],
    answer: "The inputs to a component of React"
  },
  {
    question: "What are the advantages of using React?",
    options: [
      "Use of Virtual DOM to improve efficiency",
      "Gentle learning curve",
      "Components not being reusable",
      "Both A and B"
    ],
    answer: "Both A and B"
  },
  {
    question: "What are the limitations of React?",
    options: [
      "React is not a full-blown framework as it is only a library",
      "The components of React are numerous and will take time to fully grasp the benefits of all",
      "It might be difficult for beginner programmers to understand React",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What are the important features of React?",
    options: [
      "It supports server-side rendering",
      "It won't crash your computer when writing code",
      "It makes your code look like the English language (easily readable)",
      "None of the above"
    ],
    answer: "It supports server-side rendering"
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app">     
      {showScore ? (
        <Score score={score} totalQuestions={quizQuestions.length} handleRestartQuiz={handleRestartQuiz} />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
        />
      )}
    </div>
  );
};

export default App;
