import { Notice } from "./Notice/Notice";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={``}>
            <Notice/>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;
