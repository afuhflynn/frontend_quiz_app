import { Routes, Route } from "react-router-dom";
import { ErrorPage, HomePage, QuizPage, ReviewPage } from "./pages/index.js";
const App = () => {
  return (
    <main
      className={
        "h-full w-full bg-primary-light-grey dark:bg-primary-dark-navy"
      }
    >
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/quiz/:quizName"} element={<QuizPage />} />
        <Route path={"/review"} element={<ReviewPage />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
export default App;
