import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { ThemeProvider } from "styled-components";

axios.defaults.baseURL = "http://localhost:5000";

const theme = {
  redIcon: "#FF0000",
  redIconBg: "rgba(193, 66, 66, 0.10)",
  blueIcon: "#4AB8FF",
  blueIconBg: "rgba(74, 184, 255, .10)",
  yellowIcon: "#FDCC0C",
  yellowIconBg: "rgba(253, 204, 12, .10)",
  pinkIcon: "#FD5181",
  pinkIconBg: "rgba(253, 81, 129, .10)",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
