import React from "react";
import styles from "../sass/projects.module.scss";

export default function Project({
  title,
  desc,
  images,
  projectVisit,
  projectCode,
  live,
  source,
}) {
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      {images.map((img) => (
        <div className={styles.image}>
          <img alt="project image" src={img} />
        </div>
      ))}
      <p>{desc}</p>
      <a href={live}>{projectVisit}</a>
      <a href={source}>{projectCode}</a>
    </div>
  );
}
