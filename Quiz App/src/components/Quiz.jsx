import { useState } from "react";
import QUESTIONS from "../questions";
import quizIsCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizIsCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed </h2>
      </div>
    );
  }

  const { text, answers } = { ...QUESTIONS[activeQuestionIndex] };
  const shuffledAnswers = [...answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2 id="question-overview">{text}</h2>

        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li className="answer" key={index}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="skip-action">
        <button>Skip</button>
      </div>
    </div>
  );
}
