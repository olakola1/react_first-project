
import style from './style.module.scss';
import { CardContainer } from '../../../Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

export const CatalogMaps = () => {
    const recipes = useSelector((state: RootState) => state.recipe.recipes);

    return (
        <div className={style.container}>
            <CardContainer>
                {recipes.map((recipe, index) => (
                    <div key={index} className={style.recipe_card}>
                        <h3>{recipe.name}</h3>
                        <p>{recipe.ingredients}</p>
                        <p>Время приготовления: {recipe.time}</p>
                        {recipe.photo && <img src={recipe.photo} alt={recipe.name} />}
                    </div>
                ))}
            </CardContainer>
        </div>
    );
};