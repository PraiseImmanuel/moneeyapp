import React from "react";

import styles from "../styles/CardItem.module.css";

type Props = {
    imageSrc: string;
};

const CardItem: React.FC<Props> = ({ imageSrc }) => {
    return (
        <div className={styles.card_item}>
            <img src={imageSrc} alt="" />
            <div className={styles.loader}>
                <div className={styles.loader_long}></div>
                <div className={styles.loader_short}></div>
            </div>
        </div>
    );
};

export default CardItem;
