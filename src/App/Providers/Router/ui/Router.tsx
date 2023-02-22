import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { router } from "Shared/config/router/router";

export const AppRouter = () => {
  return (
    // <Suspense fallback={<div>Я загружаюсь, обожди</div>}>
      <Routes>
        {router().map((el) => (
          <Route {...el} />
        ))}
      </Routes>
    // </Suspense>
  );
};
