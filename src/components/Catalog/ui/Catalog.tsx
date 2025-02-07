import React from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Recipe } from '../../../store/catalog/recipeReduser.ts';
import { deleteRecipe} from "../../../store/catalog/recipeReduser.ts";
import {getRecipe} from "../../../store/catalog/selectorCatalog.ts";

export const Catalog = () => {
    const recipes = useSelector(getRecipe);
    const dispatch = useDispatch();

    const handleDelete = (itemId: number) => {
        dispatch(deleteRecipe(itemId));
    };

    return (
        <div className={style.container_catalog}>
            <h2>Моя книга рецептов</h2>

            {recipes.length === 0 && (
                <div>
                    <p>У тебя еще нет рецептов</p>
                </div>
            )}

            {recipes && (
                <div className={style.card_catalog}>
                {recipes.map((item: Recipe) => (
                <div key={item.id} className={style.catalog_cardWrapper}>
                    {item.image && <img src={item.image} alt={item.name} className={style.img_desert}/>}
                    <h3>{item.name}</h3>
                    <p>{item.ingredients}</p>
                    <p>Время приготовления: {item.time}</p>
                    <button className={style.button_catalog} onClick={() => handleDelete(item.id)}>Удалить</button>
                </div>
            ))}
        </div>
    )
}
</div>
    )};