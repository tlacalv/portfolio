import React from "react";
import styles from "../sass/projects.module.scss";
import Project from "./Project";

export default function Projects({
  title,
  projectsList,
  projectVisit,
  projectCode,
}) {
  return (
    <div id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        {projectsList.map((project, index) => (
          <Project
            key={index}
            {...project}
            projectVisit={projectVisit}
            projectCode={projectCode}
          />
        ))}
      </div>
    </div>
  );
}
