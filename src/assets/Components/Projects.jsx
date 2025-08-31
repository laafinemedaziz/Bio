import { useState } from "react";
import data from "../Components/ProjectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Projects() {
  const projects = data.data.projects;
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="projects">
      <h2>Projects:</h2>
      {projects.map((project, projIndex) => (
        <div className="project" key={projIndex}>
          <Swiper spaceBetween={50} slidesPerView={project.paths.length / 2 + 0.2}>
            {project.paths.map((path, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <div
                  className={`card-item ${
                    activeImg === `${projIndex}-${imgIndex}` ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveImg(
                      activeImg === `${projIndex}-${imgIndex}`
                        ? null
                        : `${projIndex}-${imgIndex}`
                    )
                  }
                >
                  <img className="card-image" src={path} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="project-description">
            <h3>{project.name}:</h3>
            <h5>
              {project.date} - {project.company}
            </h5>
            <p>{project.description}</p>
            <h5>TechStack: {project.tech}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
