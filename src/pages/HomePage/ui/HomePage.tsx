import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCardData} from "../../../store/card/thunk.ts";
import {getCard} from "../../../store/card/selector.ts";
import {Header} from "../../../components/Header";
import {CardContainer} from "../../../components/Card";
import {CardMaps} from "../../../components/Card/maps";



export const HomePage = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(getCard);

    useEffect(() => {
        dispatch(fetchCardData() as any)
    }, [dispatch]);


    return (
        <div>
            <Header/>
            <CardContainer>
                <CardMaps data={data}/>
            </CardContainer>
        </div>
    );
};
