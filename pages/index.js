import React from "react";
import MenuBar from "../components/MenuBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
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
    switchBtn: switchBtn[0] === "en" ? [""] : switchBtn,
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

  const projects = {
    title: t("projectTitle"),
    projectsList: t("projectsList", { count: 1 }, { returnObjects: true }),
    projectVisit: t("projectVisit"),
    projectCode: t("projectCode"),
  };
  const skills = {
    title: t("skillsTitle"),
    skillsList: t("skillsList", { count: 1 }, { returnObjects: true }),
  };
  return {
    props: {
      menubar,
      hero,
      about,
      projects,
      skills,
    },
  };
}
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Web developer Tlacaelel Leon</title>
      </Head>
      {props.locale}
      <MenuBar {...props.menubar} />
      <Hero {...props.hero} />
      <About {...props.about} />
      <Projects {...props.projects} />
      <Skills {...props.skills} />
    </>
  );
}
