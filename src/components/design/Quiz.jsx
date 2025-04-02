import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What should you do with used batteries on campus?",
      options: [
        "Throw them in the trash",
        "Recycle them in designated battery collection bins",
        "Leave them in classroom drawers",
        "Put them in regular recycling bins"
      ],
      answer: "Recycle them in designated battery collection bins",
      explanation: "Batteries must be taken to specific collection points to prevent hazardous waste contamination.",
      category: "Hazardous Waste"
    },
    {
      question: "Which of the following items can be composted at CU Boulder?",
      options: [
        "Meat and dairy products",
        "Plastic utensils",
        "Compostable paper products and food scraps",
        "Aluminum foil"
      ],
      answer: "Compostable paper products and food scraps",
      explanation: "Only certified compostable items like food scraps and compostable paper can go in compost bins.",
      category: "Composting"
    },
    {
      question: "What should you do with empty coffee cups at CU Boulder?",
      options: [
        "Throw them in the compost bin",
        "Recycle them in the paper bin",
        "Dispose of them in the landfill trash bin",
        "Wash and reuse them"
      ],
      answer: "Dispose of them in the landfill trash bin",
      explanation: "Most coffee cups have a plastic lining that makes them non-recyclable and non-compostable.",
      category: "Waste Management"
    },
    {
      question: "How should you dispose of electronics on campus?",
      options: [
        "Put them in the landfill bin",
        "Drop them off at CU Boulder’s electronic waste recycling stations",
        "Leave them in classrooms for janitors to take care of",
        "Break them down and throw them in mixed recycling"
      ],
      answer: "Drop them off at CU Boulder’s electronic waste recycling stations",
      explanation: "CU Boulder has designated e-waste collection sites for proper electronic disposal.",
      category: "E-Waste Recycling"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer("");
    setShowFeedback(false);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white min-h-screen flex items-center justify-center py-64">
      <div className="max-w-md w-full p-6 rounded-lg shadow-2xl bg-gray-900 border border-gray-700">
        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelection(option)}
                    disabled={selectedAnswer !== ""}
                    className={`w-full p-3 rounded-md transition duration-300 border border-gray-600 
                      ${
                        selectedAnswer
                          ? option === questions[currentQuestion].answer
                            ? "bg-green-600 text-white"
                            : option === selectedAnswer
                            ? "bg-red-600 text-white"
                            : "bg-gray-800"
                          : "bg-gray-800 hover:bg-green-500 hover:text-white"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {showFeedback && (
              <div className="text-center mb-4 p-3 rounded-md bg-gray-800">
                {selectedAnswer === questions[currentQuestion].answer ? (
                  <p className="text-green-400 font-bold">✅ Correct!</p>
                ) : (
                  <p className="text-red-400 font-bold">❌ Incorrect! The correct answer is: {questions[currentQuestion].answer}</p>
                )}
                <p className="text-gray-300 mt-2">{questions[currentQuestion].explanation}</p>
              </div>
            )}

            <div className="flex justify-between gap-4 mb-4">
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="w-full p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="mb-4">
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                  }}
                ></div>
              </div>
              <p className="text-center text-sm mt-2">
                {currentQuestion + 1} of {questions.length} questions
              </p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-6">
              You scored {score} out of {questions.length}
            </p>
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
