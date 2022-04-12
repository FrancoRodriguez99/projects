import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import WSection from "./components/WSection/WSection";
import NavBar from "./components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
document.body.addEventListener("scroll", (event) => {
  if (document.body.scrollTop < 120) {
    document.querySelector("#navbox").classList.add("transparent");
  } else {
    document.querySelector("#navbox").classList.remove("transparent");
  }
});

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <WSection />
      <About />
      <Projects />
      <Contact />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
