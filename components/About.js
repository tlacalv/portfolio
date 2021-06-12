import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import styles from "../sass/about.module.scss";

export default function About({ title, paragraph, contact, subject }) {
  return (
    <>
      <div id="about" className={styles.about}>
        <div className="container">
          <div className={styles.info}>
            <h2>{title}</h2>
            <p className="paragraph">{paragraph}</p>
          </div>
          <hr />
          <h3 className={styles.contactTitle}>{contact}</h3>
          <div className={styles.buttonGroup}>
            <a
              href="https://github.com/tlacalv"
              target="blank"
              className={styles.links}
              title="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/tlaca/"
              target="blank"
              className={styles.links}
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className={styles.links}
              href={`mailto: radeon777@live.com?subject=${subject}`}
              title="Email"
            >
              <FontAwesomeIcon icon={faAt} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
