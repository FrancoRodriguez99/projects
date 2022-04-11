import english from "../constants/english";
import spanish from "../constants/spanish";
import russian from "../constants/russian";

export function useLanguage(langstring = "English") {
  let language = "";
  switch (langstring) {
    case "Español":
      language = spanish;
      break;
    case "English":
      language = english;
      break;
    case "Русский":
      language = russian;
      break;
    default:
  }

  const {
    lang,
    flag,
    otherLang,
    navBar,
    WSection,
    project,
    projectItems,
    contact,
  } = language;
  return {
    lang,
    flag,
    otherLang,
    navBar,
    WSection,
    project,
    projectItems,
    contact,
  };
}
