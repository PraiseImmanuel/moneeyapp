import React from "react";
import styles from "../styles/Nav.module.css";
import { images } from "../images/images";

const Nav: React.FC = () => {
    return (
        <div className={styles.logo_container}>
            <div className={styles.logo}>
                <img src={images.logo} alt="" />
            </div>
        </div>
    );
};

export default Nav;
