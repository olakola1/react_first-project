import React, { useState } from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../../../store/favorite/favoriteReduser.ts";
import { Recipe } from "../../../../store/catalog/recipeReduser.ts";
import { DesertData, HotterData, SoupData } from "../../../../store/card/cardReducer.ts";
import { getRecipe } from "../../../../store/catalog/selectorCatalog.ts";
import { getDesertData, getHotterData, getSoupData } from "../../../../store/card/selectorCard.ts";
import { Search } from "../../../Search";

export interface IDishes {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image?: string;
}

interface CardMapsProps {
    allDishes: IDishes[];
}

export const CardMaps = ({ allDishes }: CardMapsProps) => {
    const recipes = useSelector(getRecipe);
    const desertData = useSelector(getDesertData);
    const soupData = useSelector(getSoupData);
    const hotterData = useSelector(getHotterData);
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');

    const handleAddToFavorites = (recipe: Recipe | DesertData | SoupData | HotterData) => {
        dispatch(addToFavorites(recipe));
    };

    const combinedDishes = [...desertData, ...soupData, ...hotterData, ...recipes, ...(allDishes || [])];

    const filteredDishes = combinedDishes.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className={style.search_container}>
                <Search onSearch={(query) => setSearchQuery(query)} />
            </div>

            {filteredDishes.map((item: IDishes) => (
                <div key={item.name} className={style.cardWrapper}>
                    {item.image && <img className={style.img_desert} src={item.image} alt={item.name} />}
                    <h3>{item.name}</h3>
                    <p>{item.ingredients}</p>
                    <p>Время приготовления: {item.time}</p>
                    <button
                        className={style.button_desert}
                        onClick={() => handleAddToFavorites(item)}
                    >
                        Добавить в любимые
                        <svg width="20" height="27" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.0625 0H2.9375C1.38725 0 0.125 1.49467 0.125 3.33333V31.9947L12.5 17.404L24.875 31.9947V3.33333C24.875 1.49467 23.6128 0 22.0625 0ZM23.75 28.7867L12.5 15.524L1.25 28.7867V3.33333C1.25 2.23067 2.00712 1.33333 2.9375 1.33333H22.0625C22.9929 1.33333 23.75 2.23067 23.75 3.33333V28.7867Z"
                                fill="#6D991B"
                            />
                        </svg>
                    </button>
                </div>
            ))}
        </>
    );
};