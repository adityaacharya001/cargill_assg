import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Panel from './panel';

import "./style.css";

function MainPage() {
    const [data, setData] = useState("");


    const apiCall = axios.get("https://restcountries.eu/rest/v2/all")

    useEffect(() => {
        const data = async () => {
            try {
                const result = await apiCall;
                setData(result.data);
            } catch (err) {
                console.log("err", err);
            }
        }
        data();
    }, [])

    return (
            <Panel
                data={data}
                 />
    )
}

export default MainPage;