import React, { useEffect, useContext } from "react";
import LetteredAvatar from "react-lettered-avatar";

import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../../apis/queries";
import PaddedContainer from "../../components/PaddedContainer";

import styles from "../../styles/Dashboard.module.css";
import { images } from "../../images/images";
import { UserContext } from "../../context/UserCoxtext";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const { data } = useQuery(GET_DETAILS);
    // const [loadingData, setLoadingData] = useState<boolean>(false);
    // const [err, setErr] = useState<string | undefined>("");

    // useEffect(() => {
    //     if (loading) {
    //         setLoadingData(loading);
    //     }

    //     if (error) {
    //         setErr(`Error! ${error.message}`);
    //     }
    // }, [loading, error]);

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const loginTime = parseInt(sessionStorage.getItem("loginTime") ?? "");
        if (userContext) {
            if (!userContext.user.authenticated) {
                navigate("/");
            } else {
                if (Date.now() - loginTime > 2 * 60000) {
                    userContext.setUser({
                        ...userContext.user,
                        authenticated: false,
                    });
                    sessionStorage.clear();
                }
                setTimeout(() => {
                    userContext.setUser({
                        ...userContext.user,
                        authenticated: false,
                    });
                    sessionStorage.clear();
                }, 2 * 60000 - (Date.now() - loginTime));
            }
        }
    }, [userContext, navigate]);

    return (
        <PaddedContainer>
            <main>
                <div className={styles.dashboard_container}>
                    <div className={styles.logo_container}>
                        <div className={styles.logo}>
                            <img src={images.logo} alt="" />
                        </div>
                    </div>
                    <div className={styles.dashboard_container_wrapper}>
                        <div className={styles.user_details}>
                            <div className={styles.company_name}>
                                <div
                                    className={styles.lettered_avatar_container}
                                >
                                    <LetteredAvatar
                                        name={data?.company.name}
                                        backgroundColor="#FEE7EA"
                                        color="#1CC578"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                                <h1>{data?.company.name}</h1>
                            </div>

                            <div className={styles.detail}>
                                <h3>CEO</h3>
                                <p>{data?.company.ceo}</p>
                            </div>

                            <div className={styles.detail}>
                                <h3>CTO</h3>
                                <p>{data?.company.cto}</p>
                            </div>
                        </div>

                        <div className={styles.notification_container}>
                            <div className={styles.coming_soon}>
                                <img src={images.timer} alt="" />
                                Comming Soon
                            </div>

                            <div className={styles.card}>
                                <CardItem imageSrc={images.notify_icon_1} />
                                <CardItem imageSrc={images.notify_icon_2} />
                                <CardItem imageSrc={images.notify_icon_3} />
                            </div>

                            <div className={styles.notification_text_container}>
                                <h2>
                                    <span>📫</span> Notifications
                                </h2>

                                <p>
                                    Receive notifcations about your rider
                                    performance, efficiency reviews and a lot
                                    more
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PaddedContainer>
    );
};

export default Dashboard;
