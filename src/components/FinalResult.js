import React from "react";

export const FinalResult = ({ points }) => {
  const restartQuiz = () => window.location.reload();
  const feedback =
    points > 8 && points < 11
      ? "You are an expert!"
      : points > 6 && points < 9
      ? "You have good knowledge"
      : "Work on yourself";
  return (
    <div>
      <h1 className="game-over">Game Over</h1>
      <p className="final-result">Your score is {points} point out of 10</p>
      <p className="feedback">{feedback}</p>
      <button className="btn-main" onClick={restartQuiz}>
        Retry
      </button>
    </div>
  );
};
