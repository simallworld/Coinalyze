import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
    <Navbar /> {/* This Navbar is the shared UI will be displayed on all pages */}
    <Outlet /> {/* The Outlet component will render the child routes which means actual page which will be rendered along with Navbar */}
    </>
  )
}

export default MainLayout;