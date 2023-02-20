import React from "react";

import styles from "../styles/HeroSection.module.css";

import { images } from "../images/images";

const HeroSection: React.FC = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.logo}>
                <img src={images.logo} alt="" />
            </div>
            <section>
                <div className={styles.intro_section}>
                    <h1 className={styles.heading}>
                        Hi there, see what&apos;s new
                    </h1>
                    <p>
                        Here&apos;s how Foodcourt helps you manage your daily
                        operations and ensure your riders are efficient
                    </p>
                </div>
            </section>
            <section>
                <div className={styles.cards_section}>
                    <div className={styles.card}>
                        <img src={images.icon_1} alt="images.icon" />
                        <div className="text_container">
                            <h3 className={styles.heading}>
                                Monitor your Earnings
                            </h3>
                            <p className={styles.small_font_size}>
                                Easily see how much your businesses are earning
                                on each transaction and watch your earnings
                                rise.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={images.icon_2} alt="images.icon" />
                        <div className="text_container">
                            <h3 className={styles.heading}>
                                Manage your Businesses
                            </h3>
                            <p className={styles.small_font_size}>
                                Easily see how much your businesses are earning
                                on each transaction and watch your earnings
                                rise.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={images.icon_3} alt="images.icon" />
                        <div className="text_container">
                            <h3 className={styles.heading}>
                                Delegate to Staff
                            </h3>
                            <p className={styles.small_font_size}>
                                Easily see how much your businesses are earning
                                on each transaction and watch your earnings
                                rise.
                            </p>
                        </div>
                        <img src={images.tick} alt="tick" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
