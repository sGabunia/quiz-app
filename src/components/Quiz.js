import React from "react";
import axios from "axios";
import { FinalResult } from "./FinalResult";

export const Quiz = ({ url }) => {
  const [quiz, setQuiz] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const [points, setPoints] = React.useState(0);

  const shuffleAnswers = (answers) => answers.sort(() => Math.random() - 0.5);

  React.useEffect(() => {
    axios.get(url).then((res) =>
      setQuiz(
        res.data.results.map((result) => ({
          question: result.question,
          options: shuffleAnswers([
            ...result.incorrect_answers,
            result.correct_answer,
          ]),
          correctAnswer: result.correct_answer,
        }))
      )
    );
  }, [url]);

  const handleNextQuestion = (e) => {
    if (quiz[index].correctAnswer === e.target.outerText) {
      setPoints((prevState) => prevState + 1);
    }
    setIndex((prevState) => prevState + 1);
  };

  return (
    <div>
      {quiz && quiz[index] && (
        <>
          <div className="progress-bar">
            <label htmlFor="file"></label>
            <progress id="file" max="100" value={index * 10}>
              hello
            </progress>
            <p className="progress-index">
              <span>
                {index} completed from {quiz.length}
              </span>
            </p>
          </div>
          <p
            className="question"
            dangerouslySetInnerHTML={{ __html: quiz[index].question }}
          ></p>{" "}
          <div className="answers-wrapper">
            {quiz[index].options.map((answer, i) => (
              <button
                className="answer-btn"
                onClick={handleNextQuestion}
                key={i}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></button>
            ))}
          </div>
        </>
      )}
      {index === 10 && <FinalResult points={points} />}
    </div>
  );
};
