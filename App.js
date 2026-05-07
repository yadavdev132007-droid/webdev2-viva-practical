import React, { createContext, useContext, useState } from "react";
import "./App.css";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const Home = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme ? "dark" : "light"}>

      <h1>
        {theme ? "Dark Theme" : "Light Theme"}
      </h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <p>Theme-context-app
      </p>

    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}