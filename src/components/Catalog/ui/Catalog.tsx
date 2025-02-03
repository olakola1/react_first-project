import React from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { Recipe } from '../../../interface/interface';
import { deleteRecipe} from "../../../store/catalog/recipeReduser.ts";

export const Catalog = () => {
    const recipes = useSelector((state: RootState) => state.recipe);
    const dispatch = useDispatch();

    const handleDelete = (index: number) => {
        dispatch(deleteRecipe(index)); // Вызываем действие deleteRecipe с индексом
    };

    return (
        <div className={style.container_catalog}>
            {recipes.length === 0 ? ( // Проверяем, пуст ли массив рецептов
                <div>
                    <p>У тебя еще нет рецептов</p>
                </div>
            ) : (
            recipes.map((recipe: Recipe, index: number) => (
                <div key={index} className={style.catalog_cardWrapper}>
                    {recipe.photo && <img src={recipe.photo} alt={recipe.name} className={style.img_desert} />}
                    <h3>{recipe.name}</h3>
                    <p>{recipe.ingredients}</p>
                    <p>Время приготовления: {recipe.time}</p>
                    <button onClick={()=> handleDelete(index)}>Удалить</button>
                </div>
            )))}
        </div>
    );
};