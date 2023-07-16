import Navbar from "../Components/UI/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/UI/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
