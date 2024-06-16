import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { RouterEnums } from "./routesEnums/RouterEnums";
import { RouterConsts } from "./routesConsts/RouterConsts";

const Layout = lazy(() => import("../components/layout/MainLayout"));

const Home = lazy(() => import("../pages/Home/Home"));

function AppRouter() {
  return (
    <>
      <Routes>
        <Route
          element={
            <Suspense>
              <Layout />
            </Suspense>
          }
          path={RouterConsts[RouterEnums.MAIN]}
        >
          <Route
            index
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
