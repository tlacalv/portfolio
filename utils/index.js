import getT from "next-translate/getT";

export const isVertical = (title) => {
  if (title === "Nutrition cooking") return true;
  return false;
};

export const getLocales = async (locale, locales) => {
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
};
