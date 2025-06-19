import React, { useState } from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorites, addFavorite, removeFavorite } from "../../../../store/favorite/thunk.ts";
import { Recipe } from "../../../../store/types.ts";
import { DesertData, HotterData, SoupData } from "../../../../store/card/cardReducer.ts";
import { getRecipe } from "../../../../store/catalog/selectorCatalog.ts";
import { getDesertData, getHotterData, getSoupData } from "../../../../store/card/selectorCard.ts";
import { Search } from "../../../Search";
import { ButtonScroll } from "../../../ButtonSkroll";

// Унифицированный интерфейс для всех типов блюд
export interface IDish {
    id: number;
    name?: string;  // Опционально, так как у Recipe есть title вместо name
    title?: string; // Опционально, так как у других типов может не быть
    ingredients: string;
    time: string | number; // Разные типы в разных источниках
    image?: string;
}

interface CardMapsProps {
    allDishes?: IDish[]; // Сделаем опциональным
}

export const CardMaps = ({ allDishes = [] }: CardMapsProps) => {
    const recipes = useSelector(getRecipe);
    const desertData = useSelector(getDesertData);
    const soupData = useSelector(getSoupData);
    const hotterData = useSelector(getHotterData);
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');

    const handleAddToFavorites = (dish: IDish) => {
        dispatch(addToFavorites({
            id: dish.id,
            name: dish.name || dish.title || '', // Учитываем оба варианта
            ingredients: dish.ingredients,
            time: dish.time,
            image: dish.image
        }));
    };

    // Нормализуем данные перед объединением
    const normalizeDish = (dish: Recipe | DesertData | SoupData | HotterData): IDish => {
        return {
            id: dish.id,
            name: 'name' in dish ? dish.name : dish.title, // Проверяем наличие поля
            title: 'title' in dish ? dish.title : dish.name, // Обратный случай
            ingredients: dish.ingredients,
            time: dish.time,
            image: dish.image
        };
    };

    // Объединяем и нормализуем все данные
    const combinedDishes = [
        ...desertData.map(normalizeDish),
        ...soupData.map(normalizeDish),
        ...hotterData.map(normalizeDish),
        ...recipes.map(normalizeDish),
        ...allDishes
    ];

    // Функция поиска учитывает оба возможных поля (name/title)
    const filteredDishes = combinedDishes.filter((item) => {
        const searchString = (item.name || item.title || '').toLowerCase();
        return searchString.includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <div>
                <Search onSearch={(query) => setSearchQuery(query)}/>
            </div>
            <div className={style.container_card}>
                {filteredDishes.map((item) => (
                    <div key={item.id} className={style.cardWrapper}>
                        {item.image && <img className={style.img_card} src={item.image} alt={item.name || item.title || ''}/>}
                        <h3>{item.name || item.title}</h3>
                        <p>{item.ingredients}</p>
                        <p>Время приготовления: {item.time}</p>
                        <button
                            className={style.button_card}
                            onClick={() => handleAddToFavorites(item)}
                        >
                            Добавить в любимые
                            <svg width="20" height="27" viewBox="0 0 25 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.0625 0H2.9375C1.38725 0 0.125 1.49467 0.125 3.33333V31.9947L12.5 17.404L24.875 31.9947V3.33333C24.875 1.49467 23.6128 0 22.0625 0ZM23.75 28.7867L12.5 15.524L1.25 28.7867V3.33333C1.25 2.23067 2.00712 1.33333 2.9375 1.33333H22.0625C22.9929 1.33333 23.75 2.23067 23.75 3.33333V28.7867Z"
                                    fill="#6D991B"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            <ButtonScroll/>
        </>
    );
};