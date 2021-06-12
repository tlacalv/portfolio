import React from "react";
import styles from "../sass/projects.module.scss";
import { isVertical } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";

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
      <h3 className={styles.subtitle}>{title}</h3>
      <div
        className={`${styles.images} ${
          isVertical(title) ? styles.vertical : ""
        }`}
      >
        {images.map((img) => (
          <div className={styles.image}>
            <img alt="project image" src={img} />
          </div>
        ))}
      </div>
      <p className="paragraph">{desc}</p>
      <div className={styles.buttons}>
        <a className="button" target="_blank" href={live}>
          {projectVisit} <FontAwesomeIcon icon={faGlobe} />
        </a>
        <a className="button" target="_blank" href={source}>
          {projectCode} <FontAwesomeIcon icon={faCode} />
        </a>
      </div>
    </div>
  );
}
