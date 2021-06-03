import React from "react";
import styles from "../sass/hero.module.scss";
import ConsoleMessage from "./ConsoleMessage";

export default function Hero() {
  return (
    <div class={styles.hero}>
      <h1 class="display-4 text-light text-center" data-t>
        hero.webDev
      </h1>
      <ConsoleMessage />
    </div>
  );
}
