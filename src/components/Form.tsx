import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Form.module.css";

import { images } from "../images/images";
import { UserContext } from "../context/UserCoxtext";
import { dummyLogin } from "../dummyLogin/dummyLogin";
import Notification from "./Notification";

const Form: React.FC = () => {
    const [hidePassword, setHidePassword] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(true);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit: () => void = () => {
        // compare login details
        if (
            userContext.user.email === dummyLogin.email &&
            userContext.user.password === dummyLogin.password
        ) {
            setSuccess(true);
            setTimeout(() => {
                navigate("/dashboard");
            }, 5000);
        } else {
            setSuccess(false);
        }
    };

    return (
        <React.Fragment>
            {success ? (
                ""
            ) : (
                <Notification>
                    <h3>Login Unsuccessful</h3>
                    <p>Please check details and try again</p>
                </Notification>
            )}
            <form
                className={styles.form}
                onSubmit={(event) => event.preventDefault()}
            >
                <label htmlFor="" className={styles.label}>
                    Email
                    <div className={styles.outer_input_container}>
                        <input
                            type="text"
                            className={styles.input}
                            onChange={(event) =>
                                userContext.setUser({
                                    email: event.target.value,
                                    password: userContext.user.password,
                                })
                            }
                        />
                    </div>
                </label>

                <label htmlFor="" className={styles.label}>
                    Password
                    <div className={styles.outer_input_container}>
                        <input
                            type={!hidePassword ? "password" : "text"}
                            className={styles.input}
                            onChange={(event) =>
                                userContext.setUser({
                                    email: userContext.user.email,
                                    password: event.target.value,
                                })
                            }
                            onClick={() => setHidePassword(false)}
                        />
                        <img
                            onClick={() => setHidePassword(!hidePassword)}
                            src={images.eye_icon}
                            alt="eye icon"
                            className={`${styles.eye_icon} ${
                                hidePassword ? styles.hidden : ""
                            }`}
                        />
                    </div>
                </label>

                <button
                    onClick={() => handleSubmit()}
                    className={styles.submit_button}
                >
                    Login
                </button>
            </form>
        </React.Fragment>
    );
};

export default Form;
