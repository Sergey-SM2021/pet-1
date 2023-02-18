import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AsyncIntro } from "pages/Intro/ui/Into.async";
import { AsyncProfile } from "pages/Profile/Profile/Profile.async";
import { Suspense } from "react";
import "./style/index.scss";
import { useTheme } from "Shared/lib/theme/useTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AsyncIntro />,
  },
  {
    path: "/profile",
    element: <AsyncProfile />,
  },
]);

export const App = () => {
  const { changeTheme, theme } = useTheme();
  const handlerClick = () => {
    changeTheme();
  };
  return (
    <div className={`app ${theme}`}>
      <button onClick={handlerClick}>theme</button>
      <Suspense fallback={<div>Я загружаюсь, обожди</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};
