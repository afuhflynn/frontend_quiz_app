import { MoonIcon, SunIcon } from "lucide-react";
import useLocalStorageTheme from "../hooks/useLocalStorageTheme";
import { useAppStore } from "../lib/app.store";
import { useEffect, useState } from "react";
import { accessibilityIcon, cssIcon, htmlIcon, jsIcon } from "../assets";
import { navItems } from "../constants/constants";

const Header = () => {
  const [theme, setTheme] = useLocalStorageTheme("local-key", "light");
  const [quizLogo, setQuizLogo] = useState(null);
  const {
    setPrefersTheme,
    quizSlug,
    quizId,
    quizLogoBgColor,
    setQuizLogoBgColor,
  } = useAppStore();

  const handleThemeToggle = () => {
    setPrefersTheme(theme);
  };

  useEffect(() => {
    if (!quizId) {
      setQuizLogoBgColor(null);
      return;
    }
    const currentQuiz = navItems.find((item) => item.id === quizId);
    if (!currentQuiz) {
      setQuizLogoBgColor("");
    } else {
      setQuizLogoBgColor(currentQuiz.logoBgColor);
    }
  }, [setQuizLogoBgColor, navItems, quizId]);

  useEffect(() => {
    const handleSetQuizLogo = () => {
      if (!quizSlug) {
        setQuizLogo(null);
        return;
      }

      switch (quizSlug.toLowerCase()) {
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
  }, [quizSlug, setQuizLogo, htmlIcon, cssIcon, jsIcon, accessibilityIcon]);

  return (
    <div className="flex flex-row items-center justify-between w-full min-h-[20%] h-auto pt-4 md:pt-0">
      <div className="flex items-center h-auto gap-4">
        <div
          className={`${quizLogoBgColor} h-[48px] w-[48px] rounded-lg flex flex-row items-center justify-center p-1 border-border`}
        >
          {quizLogo && (
            <img src={quizLogo} alt={quizSlug} className="w-full h-full" />
          )}
        </div>
        <h1 className="capitalize text-[23px] font-bold hidden md:flex">
          {quizSlug}
        </h1>
      </div>
      <div className="w-auto gap-[16px] flex flex-row items-center justify-end h-[28px]">
        <button
          disabled={theme === "light"}
          onClick={() => {
            setTheme("light");
            handleThemeToggle();
          }}
          className="h-[18px] w-[17.18]"
        >
          <SunIcon
            className={`dark:text-primary-pure-white text-primary-grey-navy w-full h-full`}
          />
        </button>
        <button className="cursor-pointer">
          <input
            type="range"
            className=" theme-toggle-input"
            value={theme === "light" ? 0 : 1}
            onChange={() => {}}
            max={1}
          />
        </button>
        <button
          disabled={theme === "dark"}
          onClick={() => {
            setTheme("dark");
            handleThemeToggle();
          }}
          className="h-[18px] w-[17.18]"
        >
          <MoonIcon
            className={`dark:text-primary-pure-white text-primary-grey-navy w-full h-full`}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
