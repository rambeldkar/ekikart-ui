import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
        <App />
      </ThemeSwitcherProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
