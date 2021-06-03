import React from "react";
import styles from "../sass/console.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ConsoleMessage() {
  return (
    <div className={styles.heroMessage}>
      <div className={styles.consoleHeader}>
        <div className={`${styles.heroIco} ${styles.red}`}></div>
        <div className={`${styles.heroIco} ${styles.yellow}`}></div>
        <div className={`${styles.heroIco} ${styles.green}`}></div>
        <strong className={styles.consoleTitle}>hero.title</strong>
      </div>
      <div className={styles.consoleBody}>
        <p className={styles.line}>
          <span className={styles.name}>tlacaelel:~$ </span>{" "}
          <span data-t>hero.message</span>
        </p>
        {/* <p className={styles.line}>
          <span className={styles.name}>tlacaelel:~$ </span>
          <a className={styles.link} href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className={styles.link} href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p> */}
        <p className={styles.line}>
          <span className={styles.name}>tlacaelel:~$ </span>
          <span className={styles.cursor}></span>
        </p>
        <div className={styles.links}>
          <a
            className={styles.link}
            target="blank"
            href="https://github.com/tlacalv"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className={styles.link}
            target="blank"
            href="https://www.linkedin.com/in/tlaca/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
