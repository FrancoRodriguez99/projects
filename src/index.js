import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import WSection from "./components/WSection/WSection";
import NavBar from "./components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "./redux/store";

document.body.addEventListener("scroll", (event) => {
  if (document.body.scrollTop < 120) {
    document.querySelector("#navbox").classList.add("transparent");
  } else {
    document.querySelector("#navbox").classList.remove("transparent");
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <WSection />

      <Projects />

      <Contact />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
