import React from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Recipe } from '../../../store/catalog/recipeReduser.ts';
import { deleteRecipe} from "../../../store/catalog/recipeReduser.ts";
import { getRecipe } from "../../../store/catalog/selectorCatalog.ts";


const categoryLabels = {
    breakfast: 'Завтраки',
    lunch: 'Обеды',
    dinner: 'Ужины',
    dessert: 'Десерты',
    healthy: 'Здоровое питание'
};

export const Catalog = () => {
    const recipes = useSelector(getRecipe);
    const dispatch = useDispatch();

    const handleDelete = (itemId: number) => {
        dispatch(deleteRecipe(itemId));
    };

    const groupedRecipes = recipes.reduce((acc: Record<string, Recipe[]>, recipe) => {
        if (!acc[recipe.category]) {
            acc[recipe.category] = [];
        }
        acc[recipe.category].push(recipe);
        return acc;
    }, {});

    return (
        <div className={style.container_catalog}>
            <h2>Моя книга рецептов</h2>

            {recipes.length === 0 && (
                <div>
                    <p>У тебя еще нет рецептов</p>
                </div>
            )}

            {Object.entries(groupedRecipes).map(([category, categoryRecipes]) => (
                <div key={category} className={style.category_section}>
                    <h3>{categoryLabels[category as keyof typeof categoryLabels] || category}</h3>
                    <div className={style.card_catalog}>
                        {categoryRecipes.map((item: Recipe) => (
                            <div key={item.id} className={style.catalog_cardWrapper}>
                                {item.image && <img src={item.image} alt={item.name} className={style.img_desert}/>}
                                <h4>{item.name}</h4>
                                <p>{item.ingredients}</p>
                                <p>Время приготовления: {item.time}</p>
                                <button className={style.button_catalog} onClick={() => handleDelete(item.id)}>
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};