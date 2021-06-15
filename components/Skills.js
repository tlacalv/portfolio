import React from "react";
import styles from "../sass/skills.module.scss";

export default function Skills({ title, skillsList }) {
  return (
    <div id="skills" className={styles.skills}>
      <div className="container">
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {skillsList.map((skill, index) => (
            <li
              key={index}
              style={{ "--primary-color": skill.color }}
              className={styles.item}
            >
              {skill.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
