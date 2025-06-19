import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store'; // Импортируем типизированный dispatch
import style from './style.module.scss';
import { getFavoriteRecipes, getFavoritesLoading } from "../../../store/favorite/selectorFavorites";
import { fetchFavorites, removeFavorite } from "../../../store/favorite/thunk";

export const FavoriteRecipes = () => {
    // Используем типизированный dispatch из store
    const dispatch = useAppDispatch();
    const favoriteRecipes = useSelector(getFavoriteRecipes);
    const isLoading = useSelector(getFavoritesLoading);

    useEffect(() => {
        // Тип dispatch теперь знает о наших асинхронных действиях
        dispatch(fetchFavorites());
    }, [dispatch]);

    const handleRemoveRecipe = (id: number) => {
        dispatch(removeFavorite(id));
    };

    if (isLoading) {
        return <div className={style.loading}>Загрузка...</div>;
    }

    return (
        <div className={style.container_favorite}>
            <h2>Любимые рецепты</h2>

            {favoriteRecipes.length === 0 ? (
                <div>
                    <p>У тебя еще нет любимых рецептов</p>
                </div>
            ) : (
                <div className={style.catalog_favorite}>
                    {favoriteRecipes.map((item) => (
                        <div key={item.id} className={style.catalog_favorite_wrapper}>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={style.img_desert}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            )}
                            <h3>{item.title}</h3>
                            <p>{item.ingredients}</p>
                            <p>Время приготовления: {item.time} мин</p>
                            <button
                                className={style.button_favorite}
                                onClick={() => handleRemoveRecipe(item.id)}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Удаление...' : 'Удалить из избранного'}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};