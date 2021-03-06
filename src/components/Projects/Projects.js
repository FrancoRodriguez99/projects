import React from "react";
import ecw from "../../assets/ecw.PNG";
import ppp from "../../assets/ppp.jpg";
import qm from "../../assets/qm.png";
import rfp from "../../assets/rfp.png";
import gamereact from "../../assets/gamereact.PNG";
import tdl from "../../assets/tdl.PNG";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./Projects.css";

function Projects() {
  const langstring = useSelector((state) => state.lang.lang);
  const { project, projectItems } = useLanguage(langstring);
  return (
    <section id="projects">
      <h2>
        <u>{project}</u>
      </h2>
      <div id="carouselbox">
        <div id="Carrouseldr">
          <Carousel fade>
            <Carousel.Item>
              <a
                href="https://codepen.io/JFrancoRodriguez/full/oNpGGGB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="d-block w-100" src={ppp} alt="First slide" />
              </a>

              <Carousel.Caption>
                <h3>{projectItems[0][0]}</h3>
                <p>{projectItems[0][1]}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a
                href="https://francorodriguez99.github.io/ecommerceweb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="d-block w-100" src={ecw} alt="First slide" />
              </a>

              <Carousel.Caption>
                <h3>{projectItems[1][0]}</h3>
                <p>{projectItems[1][1]}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a
                href="https://francorodriguez99.github.io/reactreduxgame/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="d-block w-100"
                  src={gamereact}
                  alt="First slide"
                />
              </a>

              <Carousel.Caption>
                <h3>{projectItems[5][0]}</h3>
                <p>{projectItems[5][1]}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a
                href="https://francorodriguez99.github.io/ToDoList/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="d-block w-100" src={tdl} alt="First slide" />
              </a>

              <Carousel.Caption>
                <h3>{projectItems[3][0]}</h3>
                <p>{projectItems[3][1]}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a
                href="https://codepen.io/JFrancoRodriguez/full/WNdZZZY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="d-block w-100" src={rfp} alt="First slide" />
              </a>

              <Carousel.Caption>
                <h3>{projectItems[4][0]}</h3>
                <p>{projectItems[4][1]}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a
                href="https://francorodriguez99.github.io/quotemachine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="d-block w-100" src={qm} alt="First slide" />
              </a>
              <Carousel.Caption>
                <h3>{projectItems[2][0]}</h3>
                <p>{projectItems[2][1]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Projects;
