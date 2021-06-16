import React from "react";
import MenuBar from "../components/MenuBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { getLocales } from "../utils";
import Head from "next/head";

export async function getStaticProps({ locale, locales }) {
  return await getLocales(locale, locales);
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
