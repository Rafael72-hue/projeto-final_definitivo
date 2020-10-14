import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/components/globalStyle";
import { lightTheme, darkTheme } from "./components/Themes/Themes";
import "./styles.css";
import Routes from "./router";

const useStateWithLocalStorage = (localStorageKey) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem(localStorageKey) || "light"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, theme);
  }, [theme]);

  return [theme, setTheme];
};
export default function App() {
  const [theme, setTheme] = useStateWithLocalStorage("@Theme");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <div class="switch__container">
            <input
              id="switch-shadow"
              class="switch switch--shadow"
              type="checkbox"
              checked={theme === "dark" ? true : false}
              onChange={themeToggler}
            />
            <label for="switch-shadow"></label>
          </div>

          <Routes />
        </div>
      </>
    </ThemeProvider>
  );
}
