import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styles from "../sass/menubar.module.scss";

export default function MenuBar({
  about,
  skills,
  projects,
  switchLang,
  switchBtn,
}) {
  const [show, setShow] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -100) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [show],
    undefined,
    false,
    500
  );

  return (
    <nav className={`${styles.navbar} ${show ? styles.smallNav : ""}`}>
      <div className={styles.navbarContent}>
        <a href="/" className={styles.brand}>
          <span>Tlacaelel </span>
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>

        <div className={styles.navbarCollapse}>
          <div className={styles.navMenu}>
            <a className={styles.navLink} href="#about" id="aboutMenu">
              {about}
            </a>
            <a className={styles.navLink} href="#projects" id="projectsMenu">
              {projects}
            </a>
            <a className={styles.navLink} href="#skills" id="skillsMenu">
              {skills}
            </a>
            <a
              className={`${styles.navLink} ${styles.highlight}`}
              href={`/${switchBtn[0]}`}
            >
              {switchLang}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
