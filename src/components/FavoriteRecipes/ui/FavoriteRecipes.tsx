import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import { getFavoriteRecipes } from "../../../store/favorite/selectorFavorites.ts";
import { removeFromFavorites } from "../../../store/favorite/favoriteReduser.ts";

export interface FavoriteRecipe {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image?: string;
}

export const FavoriteRecipes = () => {
    const favoriteRecipes = useSelector(getFavoriteRecipes);
    const dispatch = useDispatch();
    const handleRemoveRecipe = (id: number) => {
        dispatch(removeFromFavorites(id));
    };

    return (
        <div className={style.container_favorite}>
            <h2>Любимые рецепты</h2>

            {!favoriteRecipes.length && (
                <div>
                    <p>У тебя еще нет рецептов</p>
                </div>
            )}
            {favoriteRecipes && (
                <div className={style.catalog_favorite}>
                    {favoriteRecipes.map((item: FavoriteRecipe) => (
                        <div key={item.id} className={style.catalog_favorite_wrapper}>
                            {'image' in item ? (
                                <img src={item.image} alt={item.name} className={style.img_desert}/>
                            ) : (
                                item.image && <img src={item.image} alt={item.name} className={style.img_desert}/>
                            )}
                            <h3>{item.name}</h3>
                            <p>{item.ingredients}</p>
                            <p>Время приготовления: {item.time}</p>
                            <button className={style.button_favorite} onClick={() => handleRemoveRecipe(item.id)} >Удалить
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};