import { Route, Routes } from "react-router-dom";
import CoinDetails from "../../pages/CoinDetails";
import MainLayout from "../../pages/Layout";
import Home from "../../pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Main Layout will render the Navbar and Outlet for child routes */}
        <Route index element={<Home />} />
        {/* Here can be add more routes if needed */}
        <Route path="/details/:coinId" element={<CoinDetails />} />
      </Route>
    </Routes>
  );
};

export default Routing;
