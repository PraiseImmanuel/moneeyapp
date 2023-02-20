import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "../../apis/queries";

import styles from "../../styles/Dashboard.module.css";

const Dashboard: React.FC = () => {
    const { loading, error, data } = useQuery(GET_DETAILS);
    //eslint disable
    // console.log(loading, error, data);
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
};

export default Dashboard;
