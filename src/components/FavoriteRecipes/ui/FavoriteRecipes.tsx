import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store.ts';
import style from './style.module.scss';

export const FavoriteRecipes = () => {
    const favoriteRecipes = useSelector((state: RootState) => state.favoriteRecipes);

    return (
        <div className={style.container_favorite}>
            <h2>Любимые рецепты</h2>
            {favoriteRecipes.length === 0 ? (
                <p>Тут пока пусто</p>
            ) : (
                favoriteRecipes.map((recipe, index) => (
                    <div key={index} className={style.catalog_favorite_wrapper}>
                        {'image' in recipe ? (
                            <img src={recipe.image} alt={recipe.name} className={style.img_desert} />
                        ) : (
                            recipe.photo && <img src={recipe.photo} alt={recipe.name} className={style.img_desert} />
                        )}
                        <h3>{recipe.name}</h3>
                        <p>{recipe.ingredients}</p>
                        <p>Время приготовления: {recipe.time}</p>
                    </div>
                ))
            )}
        </div>
    );
};