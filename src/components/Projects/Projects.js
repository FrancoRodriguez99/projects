import React from "react";
import ecw from "../../assets/ecw.PNG";
import ppp from "../../assets/ppp.jpg";
import qm from "../../assets/qm.png";
import rfp from "../../assets/rfp.png";
import tdl from "../../assets/tdl.PNG";
import "./Projects.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector } from "react-redux";

function Projects() {
  const langstring = useSelector((state) => state.lang.lang);
  const { project, projectItems } = useLanguage(langstring);
  return (
    <section id="projects">
      <h2>
        <u>{project}</u>
      </h2>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner">
          <ProjectItem
            href="https://codepen.io/JFrancoRodriguez/pen/oNpGGGB"
            imgSrc={ppp}
            active=" active"
            projectTitle={projectItems[0][0]}
            projectDescription={projectItems[0][1]}
          />

          <ProjectItem
            href="https://francorodriguez99.github.io/ecommerceweb/"
            imgSrc={ecw}
            projectTitle={projectItems[1][0]}
            projectDescription={projectItems[1][1]}
          />

          <ProjectItem
            href="https://francorodriguez99.github.io/quotemachine/"
            imgSrc={qm}
            projectTitle={projectItems[2][0]}
            projectDescription={projectItems[2][1]}
          />

          <ProjectItem
            href="https://francorodriguez99.github.io/ToDoList/"
            imgSrc={tdl}
            projectTitle={projectItems[3][0]}
            projectDescription={projectItems[3][1]}
          />
          <ProjectItem
            href="https://codepen.io/JFrancoRodriguez/pen/WNdZZZY"
            imgSrc={rfp}
            projectTitle={projectItems[4][0]}
            projectDescription={projectItems[4][1]}
          />
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
