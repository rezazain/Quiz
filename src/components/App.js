import "../style/App.css";
import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Lambang negara Indonesia adalah..",
      answerOptions: [
        { answerText: "Bendera Merah Putih", isCorrect: false },
        { answerText: "Lagu Indonesia Raya", isCorrect: false },
        { answerText: "Garuda Pancasila", isCorrect: true },
        { answerText: "Bahasa Indonesia", isCorrect: false },
      ],
    },
    {
      questionText: "Makna simbol padi dan kapas dalam Pancasila adalah..",
      answerOptions: [
        { answerText: "Persatuan dan kesatuan", isCorrect: false },
        { answerText: "Tenaga Pembangunan", isCorrect: false },
        { answerText: "Kekuatan bangsa", isCorrect: false },
        { answerText: "Kemakmuran dan kesejahteraan", isCorrect: true },
      ],
    },
    {
      questionText: "Bunyi sila Pancasila yang ketiga adalah..",
      answerOptions: [
        { answerText: "Ketuhanan Yang Maha Esa", isCorrect: false },
        { answerText: "Kemanusiaan yang adul dan beradab", isCorrect: false },
        { answerText: "Persatuan Indonesia ", isCorrect: true },
        {
          answerText: "Keadilan sosial bagi seluruh rakyat Indinesia",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Tampa sengaja ina merusak mainan temannya. Sikap Ina sebaiknya adalah..",
      answerOptions: [
        {
          answerText:
            "Mengatakan dengan sejujurnya bahwa yang merusakkan bukan Ina",
          isCorrect: false,
        },
        {
          answerText: "Meninggalakan mainan teman begitu saja",
          isCorrect: false,
        },
        {
          answerText:
            "mengembalikan tanpa memberitahukan bahwa mainannya rusak ",
          isCorrect: false,
        },
        {
          answerText:
            "meminta maaf dan berkata jujur bahwa Ina yang merusakkan",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("Jawaban Benar!");
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
