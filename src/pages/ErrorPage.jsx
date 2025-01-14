import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden p-small sm:p-medium md:p-large bg-primary-light-grey dark:bg-primary-dark-navy bg-img">
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-primary-dark-navy dark:text-primary-pure-white">
        <h1 className="font-bold text-h2">404: Page not found!</h1>
        <p className="text-xl text-regular font-rubik-regular opacity-80">
          The page you are looking for was not found
        </p>
        <button
          onClick={handleNavigate}
          className="bg-primary-pure-white dark:bg-primary-navy text-primary-dark-navy dark:text-primary-pure-white h-[3rem] w-[8rem] rounded-lg shadow-lg hover:ring-slate-300 focus:bg-opacity-80 mt-6 text-[18px] font-semibold"
        >
          Back Home
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;
