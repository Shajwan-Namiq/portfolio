import KU from "../i18n/languages/ku.json";
import EN from "../i18n/languages/en.json";

export const Translation = (language, key) => {
  if (language === "en") {
    return EN[key];
  } else if (language === "ku") {
    return KU[key];
  }
};
