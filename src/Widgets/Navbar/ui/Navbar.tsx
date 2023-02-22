import { Trans, useTranslation } from "react-i18next";
import { AppLink } from "Shared";
import { SwitcherTheme } from "Widgets/SwitcherTheme";
import style from "./Navbar.module.scss";
import "App/i18n"

interface INavbar {}

export const Navbar = () => {
  const {t} = useTranslation()
  return (
    <div className={style.navbar}>
      <AppLink theme="secondary" to={"/profile"}>
        {t('link')}
      </AppLink>
      <SwitcherTheme />
    </div>
  );
};
