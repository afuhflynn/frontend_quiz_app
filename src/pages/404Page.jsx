import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-full overflow-hidden">
      <h1 className="font-bold text-h1">404</h1>
      <h2 className="mt-3 text-h2">Page not found</h2>
      <p className="text-lg mt-4">
        The page you are looking for was not found it may have moved.
      </p>
      <Link
        to="/"
        className="bg-secondary-foreground text-secondary py-3 px-6 rounded-xl shadow-lg hover:ring-slate-300 focus:bg-opacity-80 mt-6 text-[18px] border-border flex items-center justify-center gap-2"
      >
        <Home /> Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
