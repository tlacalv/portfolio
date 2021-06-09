import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import Hero from "../components/Hero";
import About from "../components/About";
import getT from "next-translate/getT";
import Head from "next/head";

export async function getStaticProps({ locale, locales }) {
  const switchBtn = locales.filter((i) => i !== locale);
  const t = await getT(locale, "home");
  const switchLang =
    switchBtn[0] === "en" ? "English" : switchBtn[0] === "es" ? "Español" : "";

  const menubar = {
    about: t("about"),
    skills: t("skills"),
    projects: t("projects"),
    switchLang,
  };
  const hero = {
    webDev: t("webDev"),
    title: t("title"),
    message: t("message"),
  };
  const about = {
    title: t("titleAbout"),
    paragraph: t("paragraphAbout"),
    contact: t("contactAbout"),
    subject: t("subjectAbout"),
  };
  return {
    props: {
      menubar,
      hero,
      about,
    },
  };
}
export default function Home(props) {
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <Head>
        <title>Web developer Tlacaelel Leon</title>
      </Head>
      {props.locale}
      <div onScroll={(e) => setScroll(e.target.scrollTop)} id="content">
        <MenuBar {...props.menubar} scroll={scroll} />
        <Hero {...props.hero} />
        <About {...props.about} />
      </div>
    </>
  );
}
