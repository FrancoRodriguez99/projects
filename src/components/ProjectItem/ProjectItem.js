import "./ProjectItem.css";

function ProjectItem({
  href = "?",
  imgSrc = " test",
  projectTitle = "missing title",
  projectDescription = "missing discription",
  active = "",
}) {
  const itsActive = "carousel-item" + active;
  return (
    <div className={itsActive}>
      <div className="d-flex justify-content-center">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt="Project Display" />
        </a>
      </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>{projectTitle}</h5>
        <p className="text-description-project">{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
