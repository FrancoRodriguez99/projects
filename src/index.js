import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Contact from './components/Contact'
import Projects from './components/Projects'
import WSection from './components/WSection'
import NavBar from './components/NavBar'


document.body.addEventListener("scroll", event => { 
  if (document.body.scrollTop > 0) { 
    document.querySelector("#navbar").classList.add("transparent") }
    
    if (document.body.scrollTop === 0) { 
    document.querySelector("#navbar").classList.remove("transparent")}
  });





ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <WSection />

   <Projects />

    <Contact />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
