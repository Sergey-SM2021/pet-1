import "./style/index.scss";
import { useTheme } from "Shared/lib/theme/useTheme";
import { AppRouter } from "./Providers/Router";

export const App = () => {
  const { changeTheme, theme } = useTheme();
  const handlerClick = () => {
    changeTheme();
  };
  return (
    <div className={`app ${theme}`}>
      <button onClick={handlerClick}>theme</button>
      <AppRouter />
    </div>
  );
};
