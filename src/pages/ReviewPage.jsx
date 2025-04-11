import { useNavigate, useParams } from "react-router-dom";
import { navItems } from "../constants/constants";
import { useAppStore } from "../lib/app.store";
import { useEffect, useState } from "react";
import { accessibilityIcon, cssIcon, htmlIcon, jsIcon } from "../assets";
import { MenuSquare, RefreshCcw } from "lucide-react";

const ReviewPage = () => {
  const [quizLogo, setQuizLogo] = useState(null);
  const { slug, id } = useParams();
  const { quizLogoBgColor, setQuizLogoBgColor, score, questionsCount } =
    useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const currentQuiz = navItems.find((item) => item.id === id);
      if (!currentQuiz) {
        setQuizLogoBgColor("");
      } else {
        setQuizLogoBgColor(currentQuiz.logoBgColor);
      }
    }
  }, [setQuizLogoBgColor, navItems, id]);

  useEffect(() => {
    const handleSetQuizLogo = () => {
      if (!slug) {
        setQuizLogo(null);
        return;
      }

      switch (slug.toLowerCase()) {
        case "html":
          setQuizLogo(htmlIcon);
          break;
        case "css":
          setQuizLogo(cssIcon);
          break;
        case "javascript":
          setQuizLogo(jsIcon);
          break;
        case "accessibility":
          setQuizLogo(accessibilityIcon);
          break;
        default:
          setQuizLogo(null);
          break;
      }
    };
    handleSetQuizLogo();
  }, [slug, setQuizLogo, htmlIcon, cssIcon, jsIcon, accessibilityIcon]);

  const handlePlayAgain = () => {
    navigate(`/quiz/${slug}/${id}`);
  };
  const handleTakeNewQuiz = () => {
    navigate(`/`);
  };

  // Navigate back to home page if user refresh their browser and clear score state
  if (!score || !questionsCount) navigate("/");
  return (
    <div className="grid w-full h-full grid-cols-1 gap-12 mb-12 md:mt-12 md:grid-rows-1 md:gap-0 md:grid-cols-2 md:p-0">
      <div className="flex flex-col gap-4 text-center md:gap-5 md:text-left">
        <h1 className="text-heading-2">Quiz Completed</h1>
        <h1 className="md:text-heading-1 text-[50px] leading-1 font-semibold">
          You Scored...
        </h1>
      </div>
      <div className="flex flex-col items-center md:items-end justify-start w-full h-auto md:gap-[24px] gap-[16px] lg:pl-[6rem] md:pl-[4rem] ">
        <div className="flex flex-col items-center w-full gap-4 p-4 py-8 text-center rounded-lg shadow-md dark:shadow-sm bg-quiz-white dark:bg-quiz-blue">
          <div className="flex items-center h-auto gap-4">
            <div
              className={`${quizLogoBgColor} h-[48px] w-[48px] rounded-lg flex flex-row items-center justify-center p-1 border-border`}
            >
              {quizLogo && (
                <img src={quizLogo} alt={slug} className="w-full h-full" />
              )}
            </div>
            <h1 className="capitalize text-[23px] font-bold">{slug}</h1>
          </div>
          <h1 className="font-extrabold text-heading-xl">{score}</h1>
          <span className="text-lg italic">out of {questionsCount}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-4 pt-8 mb-12">
          <button
            className="bg-quiz-purple text-quiz-white w-full h-auto py-[1.2rem] px-4  rounded-2xl gap-[1.4rem] shadow-md dark:shadow-sm text-center text-[20px] font-semibold disabled:bg-quiz-purple-light flex items-center justify-center"
            onClick={handlePlayAgain}
          >
            <RefreshCcw /> Play Again
          </button>
          <button
            className="bg-secondary-foreground text-secondary w-full h-auto py-[1.2rem] px-4  rounded-2xl gap-[1.4rem] shadow-md dark:shadow-sm text-center text-[20px] md:mb-12 font-semibold flex items-center justify-center"
            onClick={handleTakeNewQuiz}
          >
            <MenuSquare /> Take a new quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
