import "./style/index.scss";
import { useTheme } from "Shared/lib/theme/useTheme";
import { AppRouter } from "./Providers/Router";
import { Navbar, Sidebar } from "Widgets";
import "./i18n";
import { Suspense } from "react";

export const App = () => {
  const { changeTheme, theme } = useTheme();
  const handlerClick = () => {
    changeTheme();
  };
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="laa">
        <Navbar />
        <button onClick={handlerClick}>theme</button>
        <AppRouter />
        <Sidebar />
      </Suspense>
    </div>
  );
};
