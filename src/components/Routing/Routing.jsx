import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import PageLoader from "../PageLoader/PageLoader";


const Home = lazy(() => import("../../pages/Home"));
const CoinDetails = lazy(() => import("../../pages/CoinDetails"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {" "}
        {/* Main Layout will render the Navbar and Outlet for child routes */}
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home /> {/* Here can be add more routes if needed */}
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<PageLoader />}>
              {" "}
              {/* Using Facebook loader as a placeholder */}
              <CoinDetails />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routing;
