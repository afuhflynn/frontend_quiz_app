import { Home, RefreshCcwIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const ErrorLoadingQuiz = ({ slug }) => {
  const handleRefreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <h1 className="font-bold text-heading-2">
        Error Loading Quiz - {slug.toUpperCase()}
      </h1>
      <p className="text-lg mt-4">
        The quiz you are looking for was not found.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-4 gap-4 mt-4 px-4">
        <button
          className="bg-secondary-foreground text-secondary py-3 px-5 rounded-xl shadow-lg hover:ring-slate-300 focus:bg-opacity-80 text-[18px] border-border flex items-center justify-center gap-2 md:w-auto w-full"
          onClick={handleRefreshPage}
        >
          <RefreshCcwIcon /> Try again
        </button>
        <Link
          to="/"
          className="bg-secondary-foreground text-secondary py-3 px-5 rounded-xl shadow-lg hover:ring-slate-300 focus:bg-opacity-80 text-[18px] border-border flex items-center justify-center gap-2 md:w-auto w-full"
        >
          <Home /> Back Home
        </Link>
      </div>
    </div>
  );
};
