import React, {useEffect, useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {fetchUserData} from "../../../store/user/thunk.ts";
//import {getUser} from "../../../store/user/selector.ts";
import {Header} from "../../../components/Header";
import {CardContainer} from "../../../components/Card";
import {CardMaps} from "../../../components/Card/maps";


export const HomePage = () => {
    const [data, setData] = useState()

    const card: string ='febb946e-eeb0-4d2d-bb21-da0ef18e8323'

    const baseUrl = (params: string) => {
        return `https://mocki.io/v1/'${params}`;
    }

    const getAllCards = async (params: string) => {
        const getData = await fetch(baseUrl(params));
        return await getData.json();
    }

    useEffect(() => {
        getAllCards(card).then(item => setData(item))
    }, []);

    if (!data) return (
        <div>нет данных</div>
    );

    return (
        <CardContainer>
            <Header />
            <CardMaps data={data}/>
        </CardContainer>
    );
};
