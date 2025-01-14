import { useState, useEffect } from "react";

const useLocalStorageTheme = (key, defaultTheme) => {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem(key);
      return storedTheme ? JSON.parse(storedTheme) : defaultTheme;
    } catch (e) {
      console.error(`Error retrieving theme: ${e.message}`);
      return defaultTheme;
    }
  });

  useEffect(() => {
    try {
      // Save theme to localStorage
      localStorage.setItem(key, JSON.stringify(theme));

      // Update document's class for theming
      const rootElement = document.documentElement;
      if (theme === "dark") {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    } catch (e) {
      console.error(`Error saving theme: ${e.message}`);
    }
  }, [key, theme]);

  return [theme, setTheme];
};

export default useLocalStorageTheme;
