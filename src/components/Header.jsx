import { MoonIcon, SunIcon } from "lucide-react";
import useLocalStorageTheme from "../hooks/useLocalStorageTheme";
import globalAppStore from "../store/app.store.js";

const Header = () => {
  const [theme, setTheme] = useLocalStorageTheme("local-key", "light");
  const { prefersTheme, setPrefersTheme } = globalAppStore();

  const handleThemeToggle = () => {
    setPrefersTheme(theme);
    console.log(prefersTheme);
  };
  return (
    <div className="w-full h-auto flex flex-row items-start justify-end p-4">
      <div className="w-full gap-[16px] flex flex-row items-center justify-end h-[28px]">
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
            className="h-[28px] w-[48px] input"
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
