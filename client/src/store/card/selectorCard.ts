import {RootState} from "../store.ts";

export const getDesertData = (state: RootState) => state.card.data;
export const getSoupData = (state: RootState) => state.card.soup;
export const getHotterData =(state: RootState) => state.card.hotter;
export const getCard = (state:RootState) => state.card;