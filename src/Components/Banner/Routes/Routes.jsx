import { Outlet } from "react-router-dom";
import Navber from "../../../Navber/Navber";
import Footer from "../Footer/Footer";

const Routes = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routes;