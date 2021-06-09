import React from "react";
import styles from "../sass/hero.module.scss";
import ConsoleMessage from "./ConsoleMessage";

export default function Hero({ webDev, title, message }) {
  return (
    <div class={styles.hero}>
      <h1 className={styles.title}>{webDev}_</h1>
      <ConsoleMessage title={title} message={message} />
    </div>
  );
}
