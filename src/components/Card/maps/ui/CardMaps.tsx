import style from './style.module.scss'
import {IProps} from "../../../../interface/interface";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../../../store/store"
import {addToFavorites} from "../../../../store/favorite/favoriteReduser.ts";
import {Recipe} from "../../../../interface/interface";
import {CardData} from "../../../../store/card/cardReducer.ts";


export const CardMaps = ({ data }: IProps) => {
    const recipes = useSelector((state: RootState) => state.recipe);
    const dispatch = useDispatch();

    const handleAddToFavorites = (recipe: Recipe | CardData) => {
        dispatch(addToFavorites(recipe));
    };

    return (
        <>
            {/* Отображаем данные из пропсов */}
            {data && data.map((item) => (
                <div className={style.cardWrapper} key={item.id}>
                    <img className={style.img_desert} src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.ingredients}</p>
                    <p>{item.time}</p>
                    <button
                        className={style.button_desert}
                        onClick={() => handleAddToFavorites(item)} // Добавляем обработчик
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

            {recipes.map((recipe, index) => (
                <div className={style.cardWrapper} key={index}>
                    {recipe.photo && <img className={style.img_desert} src={recipe.photo} alt={recipe.name}/>}
                    <h3>{recipe.name}</h3>
                    <p>{recipe.ingredients}</p>
                    <p>Время приготовления: {recipe.time}</p>
                    <button
                        className={style.button_desert}
                        onClick={() => handleAddToFavorites(recipe)} // Добавляем обработчик
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
