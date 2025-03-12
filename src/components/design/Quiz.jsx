import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "what is answer of question #1?",
      options: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer1",
    },
    {
      question: "what is answer of question #2?",
      options: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer2",
    },
    {
      question: "what is answer of question #3?",
      options: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer3",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer("");
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-12 mt-12">
      <div className="max-w-md w-full p-4 rounded shadow-lg">
        {!quizCompleted ? (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{questions[currentQuestion].question}</h2>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelection(option)}
                    className={`w-full p-2 border rounded-md ${
                      selectedAnswer === option ? "bg-blue-500 text-white" : "bg-black"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className="w-full p-2 bg-first_color text-white rounded-md"
            >
              Next
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
            <p>You scored {score} out of {questions.length}</p>
            <button
              onClick={handleRestartQuiz}
              className="mt-4 p-2 bg-green-500 text-white rounded-md"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
