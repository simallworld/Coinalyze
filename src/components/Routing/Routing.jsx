import { Route, Routes } from "react-router-dom";
import CoinDetails from "../../pages/CoinDetails";
import Home from "../../pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:coinId" element={<CoinDetails />} />
    </Routes>
  );
};

export default Routing;
