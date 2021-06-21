import React from "react";
import { QuizSetupPage } from "./components/QuizSetupPage";
import { Quiz } from "./components/Quiz";

function App() {
  const [hasStarted, setHasStarted] = React.useState(false);
  const [url, setUrl] = React.useState("https://opentdb.com/api.php?amount=10");

  return (
    <div className="quiz-app">
      {hasStarted ? (
        <Quiz url={url} />
      ) : (
        <QuizSetupPage setStart={setHasStarted} setUrl={setUrl} />
      )}
    </div>
  );
}

export default App;
