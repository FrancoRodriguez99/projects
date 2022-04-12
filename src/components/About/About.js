import image from "../../assets/me_andtoby.jpg";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector } from "react-redux";
import cv from "../../assets/FrancoRodriguez(Front-End-Developer).pdf";
import "./About.css";
function About() {
  const langstring = useSelector((state) => state.lang.lang);
  const { about } = useLanguage(langstring);
  return (
    <div id="about-box">
      <div id="about">
        <div id="photome">
          <img src={image} alt="Me and my Dog"></img>
          <p>{about[0]}</p>
        </div>
        <p className="aboutme">{about[1]}</p>
      </div>
      <a href={cv} download="FrancoRodriguez(Front-End-Developer)" id="cv">
        <p>{about[2]}</p>
      </a>
    </div>
  );
}

export default About;
