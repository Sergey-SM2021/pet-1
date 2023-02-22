import { SwitcherLang } from "Widgets/SwitcherLang";
import style from "./Sidebar.module.scss";

interface ISidebar {}

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <SwitcherLang />
    </div>
  );
};
