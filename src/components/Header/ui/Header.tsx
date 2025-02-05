import React, {useState} from 'react';
import style from './style.module.scss';
import logo from '../../../img/Logo.svg';
import icon from '../../../img/telegram.png';
import {Search} from "../../Search";
import {Link} from "react-router-dom";
import {Recipe} from "../../../store/catalog/recipeReduser.ts";
import {RecipeModal} from "../../Modal";
import {useDispatch, useSelector} from 'react-redux';
import {addRecipe} from "../../../store/catalog/recipeReduser.ts";
import {RootState} from "../../../store/store";

export const Header = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const recipe = useSelector ((state:RootState) => state.recipe);

    const favoriteRecipes = useSelector ((state:RootState) => state.favoriteRecipes);

    const handleSaveRecipe = (recipe: Recipe) => {
        dispatch(addRecipe(recipe));
        setIsModalOpen(false);
    };

    return (
        <div className={style.container}>
            <Link to="/home">
            <div className="logo">
                <img src={logo} alt="Логотип" />
            </div>
                </Link>
            <nav>
                <div className={style.nav}>
                    <Search/>
                    <Link to="/catalog"
                    className={style.navbar}> Моя книга рецептов {recipe.length > 0 && `(${recipe.length})`}
                        </Link>
                    <Link to="/favorite"
                          className={style.navbar}> Любимые рецепты {favoriteRecipes.length > 0 && `(${favoriteRecipes.length})`}
                    </Link>
                    <button className={style.button_new_recipe}
                            onClick={() => setIsModalOpen(true)}>
                        Добавить рецепт
                    </button>
                    <a href="https://t.me/a_useful_recipe_bot">
                        <img src={icon} alt="Телеграм" className={style.icon} />
                    </a>
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