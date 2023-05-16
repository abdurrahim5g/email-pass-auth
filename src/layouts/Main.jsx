import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-container">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Main;
