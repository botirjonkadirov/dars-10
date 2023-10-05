import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/loading";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function MainLayout() {
  const {loading} = useContext(ThemeContext)
 
  return (
    <>
      <Navbar />
      <main className="align-element py-9">
         <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
