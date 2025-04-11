import { Link } from "react-router-dom";
import { navItems } from "../constants/constants";
import { useAppStore } from "../lib/app.store";
import { useEffect } from "react";

const HomePage = () => {
  const { setQuizSlug, setQuizLogoBgColor, setQuizId } = useAppStore();

  useEffect(() => {
    setQuizSlug("");
    setQuizLogoBgColor("");
  }, [setQuizSlug, setQuizLogoBgColor]);
  return (
    <div className="w-full h-full gap-14 md:gap-0 grid grid-cols-1 grid-rows-1 md:grid-cols-2 pb-[2rem] md:p-0">
      <div className="text-primary-dark-navy dark:text-primary-pure-white w-full flex-1 flex flex-col items-start justify-start md:gap-[2.6rem] gap-5">
        <div className="flex flex-col gap-3 md:gap-0">
          <h1 className="text-heading-2">Welcome to the</h1>
          <h1 className="md:text-heading-1 text-[50px] leading-1 font-semibold">
            Frontend Quiz!
          </h1>
        </div>
        <span className="text-lg italic text-muted-foreground">
          Pick a subject to get started.
        </span>
      </div>
      <ul className="flex flex-col items-center md:items-end justify-start w-full h-auto md:gap-[24px] gap-[16px] lg:pl-[6rem] md:pl-[4rem]">
        {navItems.map((item, index) => (
          <Link
            key={`Item-${item.id}-${index}`}
            to={item.href}
            onClick={() => setQuizId(item.id)}
            className="bg-quiz-white dark:bg-quiz-blue w-full h-auto py-[0.8rem] px-4  rounded-2xl flex flex-row items-center justify-start gap-[1.4rem] shadow-md dark:shadow-sm"
          >
            <div
              className={`${item.logoBgColor} h-[48px] w-[48px] rounded-lg flex flex-row items-center justify-center p-2`}
            >
              <img src={item.logo} alt={item.label} className="w-full h-full" />
            </div>
            <h1 className="uppercase md:text-[20px] text-[20px] font-bold">
              {item.label}
            </h1>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
