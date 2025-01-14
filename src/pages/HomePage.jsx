import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navItems } from "../constants/constants";

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div className="flex flex-col items-center justify-between w-full h-full bg-img p-small sm:p-medium md:p-large">
      <header className="w-full h-[20%] flex flex-row items-start justify-end">
        <Header />
      </header>
      <section className="w-full md:w-[1160px] h-auto md:h-[456px] flex flex-col md:flex-row items-center justify-between">
        <div className="text-primary-dark-navy dark:text-primary-pure-white w-full md:w-[50%] flex flex-col items-start justify-start gap-[40px] sm:gap-[64px] md:gap-auto py-[4rem]">
          <div>
            <h1 className="text-h2">Welcome to the</h1>
            <h1 className="-mt-5 font-bold text-h2">Frontend Quiz!</h1>
          </div>
          <span className="text-lg dark:text-primary-light-bluish text-primary-grey-navy italize">
            Pick a subject to get started.
          </span>
        </div>
        <nav className="w-full md:w-[564px] py-[4rem]">
          <ul className="flex flex-col items-center md:items-end justify-start w-full h-full gap-[24px]">
            {navItems.map((item, index) => (
              <button
                onClick={() => handleNavigate(`/quiz/${item.label}`)}
                key={`Item-${item.id}-${index}`}
                className="bg-primary-pure-white dark:bg-primary-navy text-primary-dark-navy dark:text-primary-pure-white w-full md:w-[524px] h-[64px] sm:w-[640px] sm:h-[80px] rounded-[24px] flex flex-row items-center justify-start gap-[32px] p-[20px]"
              >
                <div
                  className={`${item.logoColor} h-[56px] w-[56px] rounded-lg flex flex-row items-center justify-center`}
                >
                  <img src={item.logo} alt={item.label} />
                </div>
                <span className="uppercase text-[24px] font-bold">
                  {item.label}
                </span>
              </button>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default HomePage;
