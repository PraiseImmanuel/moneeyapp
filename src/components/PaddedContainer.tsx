import React from "react";
import styles from "../styles/PaddedContainer.module.css";

type Props = {
    children?: React.ReactNode;
};

const PaddedContainer: React.FC<Props> = ({ children }) => {
    return <div className={styles.padded_container}>{children}</div>;
};

export default PaddedContainer;
