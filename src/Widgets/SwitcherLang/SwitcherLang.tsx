import { useTranslation } from "react-i18next";
import "App/i18n"

interface ISwitcherLang {}

export const SwitcherLang = () => {
  const { t, i18n } = useTranslation();
  const handlerClick = () => {
    i18n.changeLanguage("ru");
  };
  return <div onClick={handlerClick}>SwitcherLang!</div>;
};
