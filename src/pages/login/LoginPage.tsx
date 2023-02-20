import React from "react";
import styles from "../../styles/LoginPage.module.css";
import HeroSection from "../../components/HeroSection";
import Form from "../../components/Form";
import PaddedContainer from "../../components/PaddedContainer";

const LoginPage: React.FC = () => {
    return (
        <PaddedContainer>
            <main>
                <div className={styles.main_container}>
                    <HeroSection />
                    <div className={styles.login_container}>
                        <div className={styles.login_align_container}>
                            <div className={styles.login_box}>
                                <h3 className={styles.heading}>
                                    Login to your dashboard
                                </h3>
                                <p>Provide details to login to your account </p>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PaddedContainer>
    );
};

export default LoginPage;
