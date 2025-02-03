import React, { useState } from 'react';
import {Recipe} from '../../Modal/ui/Modal';
import style from './style.module.scss';

export const Catalog = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleAddRecipe = (recipe: Recipe) => {
        setRecipes([...recipes, recipe]);
    };

    return (
        <div>
                {recipes.map((recipe, index) => (
                    <div key={index} className={style.cardWrapper}>
                        {recipe.photo && <img src={recipe.photo} alt={recipe.name} className={style.img_desert} />}
                        <h3>{recipe.name}</h3>
                        <p>{recipe.ingredients}</p>
                        <p>Время приготовления: {recipe.time}</p>
                        <button>Удалить</button>
                    </div>
                ))}
        </div>
    );
};