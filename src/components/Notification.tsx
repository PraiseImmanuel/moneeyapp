import React from "react";
import styles from "../styles/Notification.module.css";

type Props = {
    children: React.ReactNode;
};

const Notification: React.FC<Props> = ({ children }) => {
    return <div className={styles.notification}>{children}</div>;
};

export default Notification;
