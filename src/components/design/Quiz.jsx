import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What role do student play in promoting environmental sustainability?",
      options: [
        "Choosing products with minimal packaging",
        "Supporting companies with strong environmental policies",
        "Reducing energy consumption at home",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the answer to question #2?",
      options: ["answer1", "answer2", "answer3", "answer4"],
      answer: "answer2",
    },
    {
      question: "What is the answer to question #3?",
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

  const handleNext = () => {
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

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer("");
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer("");
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white min-h-screen flex items-center justify-center py-64">
      <div className="max-w-md w-full p-6 rounded-lg shadow-2xl bg-gray-900 border border-gray-700">
        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">{questions[currentQuestion].question}</h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelection(option)}
                    className={`w-full p-3 rounded-md transition duration-300 border border-gray-600 hover:bg-first_color hover:text-white ${
                      selectedAnswer === option ? "bg-first_color text-white" : "bg-gray-800"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="w-full p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md disabled:opacity-50"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="w-full p-2 bg-gray-700 hover:bg-gray-600 cursor-pointer text-white rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-6">You scored {score} out of {questions.length}</p>
            <button
              onClick={handleRestartQuiz}
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md"
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