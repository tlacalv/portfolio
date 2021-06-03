import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import styles from "../sass/menubar.module.scss";

export default function MenuBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="/#ss" className={styles.brand}>
          <span>Tlacaelel </span>
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>

        <div className={styles.navbarCollapse}>
          <div className={styles.navMenu}>
            <a className={styles.navLink} href="#" id="aboutMenu">
              menu.about
            </a>
            <a className={styles.navLink} href="#" id="skillsMenu">
              menu.skills
            </a>
            <a className={styles.navLink} href="#" id="projectsMenu">
              menu.projects
            </a>
            <a className={styles.navLink} href="#">
              lang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
