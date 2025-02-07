import React, { useState } from 'react';
import style from './style.module.scss';
import { Link } from "react-router-dom";
import { Recipe } from "../../../store/catalog/recipeReduser.ts";
import { RecipeModal } from "../../Modal";
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from "../../../store/catalog/recipeReduser.ts";
import { Routes as Paths  } from '../../../config/routes'
import { getFavoriteRecipes } from "../../../store/favorite/selectorFavorites.ts";
import { getRecipe } from "../../../store/catalog/selectorCatalog.ts";

export const Header = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const recipe = useSelector (getRecipe);

    const favoriteRecipes = useSelector (getFavoriteRecipes);

    const handleSaveRecipe = (recipe: Recipe) => {
        dispatch(addRecipe(recipe));
        setIsModalOpen(false);
    };

    return (
        <div className={style.container}>
            <Link to="/home">
            <div className="logo">
                <img src={"/img/Logo.svg"} alt="Логотип" />
            </div>
                </Link>
            <nav>
                <div className={style.nav}>
                    <Link to={Paths.catalog}
                    className={style.navbar}> Моя книга рецептов {recipe.length > 0 && `(${recipe.length})`}
                        </Link>
                    <Link to={Paths.favorite}
                          className={style.navbar}> Любимые рецепты {favoriteRecipes.length > 0 && `(${favoriteRecipes.length})`}
                    </Link>
                    <button className={style.button_new_recipe}
                            onClick={() => setIsModalOpen(true)}>
                        Добавить рецепт
                    </button>
                    <Link to="https://t.me/a_useful_recipe_bot" target="_blank">
                        <img src={"img/telegram.png"} alt="Телеграм" className={style.icon} />
                    </Link>
                </div>
            </nav>
            <RecipeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveRecipe}
            />
        </div>
    );
};