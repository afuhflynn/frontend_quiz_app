import { useParams, useNavigate } from "react-router-dom";
import { getQuizBySlug } from "../constants/constants";
import { ErrorLoadingQuiz } from "../components/error-loading-quiz";
import { useAppStore } from "../lib/app.store";
import { useEffect, useState } from "react";
import { correctIcon, incorrectIcon } from "../assets";

const optionsLetters = ["a", "b", "c", "d"];
const QuizPage = () => {
  const { slug, id } = useParams();
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [hasSubmitQuiz, setHasSubmitQuiz] = useState(false);

  const [quizScore, setQuizScore] = useState(0);

  const navigate = useNavigate();

  const { quiz, setQuiz, quizSlug, setQuizSlug, setScore, setQuestionsCount } =
    useAppStore();

  // Load the current selected quiz
  useEffect(() => {
    const quiz = getQuizBySlug(slug);
    setQuiz(quiz);
    setQuizSlug(slug);
    setQuizScore(0);
    setHasSubmitQuiz(false);
  }, [slug, setQuiz, setQuizSlug]);

  // Get and load the currently selected quiz questions
  useEffect(() => {
    if (quiz) {
      setQuestions(quiz.questions);
      setQuestionsCount(quiz.questions.length);
    } else return;
  }, [quiz, setQuestions]);

  // Handle calculate new progress percentage
  useEffect(() => {
    if (questions) {
      const progress = ((progressIndex + 1) / questions.length) * 100;
      setProgress(progress);
    }
  }, [progressIndex, questions, setProgress]);

  // Handle validate current answer
  useEffect(() => {
    const handleValidate = () => {
      if (questions) {
        if (
          questions[currentQuestionIndex].answer.trim().toLowerCase() ===
          answer.trim().toLowerCase()
        ) {
          setIsAnswerCorrect(true);

          // Update current score based on choice outcome
          if (
            progressIndex + 1 <= questions.length &&
            quizScore <= questions.length
          )
            setQuizScore((prev) => prev + 1);
        } else {
          setIsAnswerCorrect(false);
        }
      }
    };

    handleValidate();
  }, [answer]);

  const handleLoadNextQuestion = () => {
    setAnswer("");
    if (questions && currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
    setProgressIndex((prev) => prev + 1);
    setHasCheckedAnswer(false);
  };

  const handleSubmitQuiz = () => {
    setHasSubmitQuiz(true);
    setIsAnswerCorrect(false);
    setAnswer("");
    setScore(quizScore);
  };

  useEffect(() => {
    if (hasSubmitQuiz === true)
      navigate(`/quiz/${slug}/${id}/quiz-complete-preview`);
  }, [hasSubmitQuiz, slug, id]);

  // Jsx

  if (!quiz) {
    return <ErrorLoadingQuiz slug={quizSlug} />;
  }

  if (quiz) {
    return (
      <div className="w-full h-full transition-all">
        {questions && (
          <div className="w-full h-full gap-8 md:gap-0 grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 pb-[2rem] md:p-0">
            <div className="flex flex-col items-start justify-between flex-1 gap-6 md:gap-0 w-full h-auto  md:py-[2rem] ">
              <div className="flex flex-col items-start md:gap-[2.6rem] gap-5 mt-2">
                <span className="text-lg italic text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <h1 className="font-semibold leading-9 text-center text-heading-4 md:text-left">
                  {questions[currentQuestionIndex].question}
                </h1>
              </div>
              {/* Progress meter */}
              <div className="w-full h-[0.9rem] px-1 overflow-hidden bg-quiz-white dark:bg-quiz-blue rounded-full shadow-sm shadow-muted-foreground dark:shadow-muted flex items-center">
                <div
                  className="w-0 h-[70%] transition-all bg-quiz-purple rounded-full"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
            <ul className="flex flex-col items-center md:items-end justify-start w-full h-auto md:gap-[16px] gap-[16px] lg:pl-[6rem] md:pl-[4rem] pt-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={`${index}-${option}`}
                  onClick={() => {
                    setAnswer(option);
                    setHasCheckedAnswer(true);
                  }}
                  disabled={hasSubmitQuiz || answer.trim() !== ""}
                  className={`bg-quiz-white dark:bg-quiz-blue w-full h-auto py-[1rem] px-4  rounded-2xl flex-row items-center justify-between shadow-md dark:shadow-sm flex  ${
                    answer.trim().toLowerCase() ===
                      option.trim().toLowerCase() && isAnswerCorrect
                      ? " ring-quiz-green ring-[2px]"
                      : answer.trim().toLowerCase() ===
                          option.trim().toLowerCase() && !isAnswerCorrect
                      ? " ring-quiz-red ring-[2px]"
                      : ""
                  } relative`}
                >
                  <div className="flex items-center md:gap-[1.4rem] gap-[0.8rem]">
                    <div
                      className={` h-[42px] w-[42px] rounded-lg flex flex-row items-center justify-center p-2 ${
                        answer.trim().toLowerCase() ===
                          option.trim().toLowerCase() && isAnswerCorrect
                          ? "bg-quiz-green"
                          : answer.trim().toLowerCase() ===
                              option.trim().toLowerCase() && !isAnswerCorrect
                          ? "bg-quiz-red"
                          : "bg-secondary dark:bg-quiz-white"
                      }`}
                    >
                      <span
                        className={`font-semibold uppercase text-[22px] text-muted-foreground ${
                          answer.trim().toLowerCase() ===
                          option.trim().toLowerCase()
                            ? "text-quiz-white"
                            : "dark:text-black"
                        }`}
                      >
                        {optionsLetters[index]}
                      </span>
                    </div>
                    <span className="md:text-[15px] text-[13px] font-semibold">
                      {option}
                    </span>
                  </div>
                  {answer.trim() !== "" &&
                    answer.trim().toLowerCase() ===
                      option.trim().toLowerCase() && (
                      <div className="">
                        {isAnswerCorrect ? (
                          <img
                            src={correctIcon}
                            alt="Correct Notification Icon"
                            className="w-8 h-8"
                          />
                        ) : (
                          <img
                            src={incorrectIcon}
                            alt="Incorrect Notification Icon"
                            className="w-8 h-8"
                          />
                        )}
                      </div>
                    )}
                  {!isAnswerCorrect &&
                    answer.trim() !== "" &&
                    questions[currentQuestionIndex].answer
                      .trim()
                      .toLowerCase() === option.trim().toLowerCase() && (
                      <img
                        src={correctIcon}
                        alt="Correct Notification Icon"
                        className="w-8 h-8"
                      />
                    )}
                </button>
              ))}
              {currentQuestionIndex + 1 === questions.length ? (
                <button
                  className="bg-quiz-purple text-quiz-white w-full h-auto py-[1.2rem] px-4  rounded-2xl gap-[1.4rem] shadow-md dark:shadow-sm text-center text-[20px] font-semibold md:-mb-4 mb-8 mt-4 disabled:bg-quiz-purple-light"
                  onClick={handleSubmitQuiz}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  className="bg-quiz-purple text-quiz-white w-full h-auto py-[1.2rem] px-4  rounded-2xl gap-[1.4rem] shadow-md dark:shadow-sm text-center text-[20px] font-semibold md:-mb-4 mt-4 mb-8 disabled:bg-quiz-purple-light"
                  onClick={handleLoadNextQuestion}
                  disabled={!hasCheckedAnswer}
                >
                  Next Question
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
};
export default QuizPage;
