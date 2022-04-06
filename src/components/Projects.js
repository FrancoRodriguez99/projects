import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <h2>
          <u>Some of my Projects</u>{" "}
        </h2>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex justify-content-center">
                <a
                  href="https://codepen.io/JFrancoRodriguez/pen/oNpGGGB"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/XYdH98m/ppp.png"
                    alt="Product Placement Web"
                  />
                </a>
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5>Product Placement Web Page</h5>
                <p className="text-description-project">
                  A simple page to display a product for sale.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-center">
                <a
                  href="https://codepen.io/JFrancoRodriguez/pen/WNdZZZY"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/z6jSNsQ/rfp.png"
                    alt="Satisfaction Formulary"
                  />
                </a>
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5>Satisfaction Formulary</h5>
                <p className="text-description-project">
                  A web page to check a client satisfaction whit a service.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-center">
                <a
                  href="https://francorodriguez99.github.io/quotemachine/"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/0r1p0XY/quotemachine.png"
                    alt="Random Quotes Machine"
                  />
                </a>
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5>Random Quotes Machine</h5>
                <p className="text-description-project">
                  A web page whit a button that randomly gives you a quote when
                  you press it.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-center">
                <a
                  href="https://francorodriguez99.github.io/ToDoList/"
                  target="_blank"
                >
                  <img
                    src="https://i.ibb.co/WPnbp3n/todolistwhitapi.png"
                    alt="To-Do List"
                  />
                </a>
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h5>To-Do List whit an API for connection to database</h5>
                <p className="text-description-project">
                  You can add to-do activities, mark them as done, or remove
                  them, and all will be saved in a testing API
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;
