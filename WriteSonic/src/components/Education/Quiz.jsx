import React, { useState, useEffect } from "react";

const QuizComponent = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${import.meta.env.VITE_QUIZ_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { question, answers, correct_answers } = data[questionIndex];
        setQuestion(question);

        const filteredAnswers = Object.values(answers).filter(
          (answer) => answer !== null
        );
        setAnswers(filteredAnswers);

        let correctAnswerKey = "";
        Object.entries(correct_answers).forEach(([key, value]) => {
          if (value === "true") {
            correctAnswerKey = key.replace("_correct", "");
          }
        });

        const correctAnswer = answers[correctAnswerKey];
        setCorrectAnswer(correctAnswer);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz question:", error);
      });
  }, [questionIndex]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    console.log("here is sel" + selectedAnswer);
    console.log("yeh correct" + correctAnswer);
    const isCorrect = selectedAnswer === correctAnswer;
    console.log(isCorrect);
    if (isCorrect) {
      console.log(correctAnswer);
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer("");

    if (questionIndex < 9) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (loading) {
    return <div>Loading quiz question...</div>;
  }

  if (showResult) {
    return <div>Quiz complete! Your score is {score}/10</div>;
  }

  return (
    <div className="bg-gray-900  p-6 shadow-md">
      <h1 className="text-2xl mb-4 text-white">{question}</h1>
      <div className="grid gap-2">
        {answers.slice(0, 4).map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelection(answer)}
            className={`${
              selectedAnswer === answer
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-md px-4 py-2`}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default QuizComponent;
