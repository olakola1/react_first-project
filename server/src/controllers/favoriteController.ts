import { Request, Response } from 'express';
import { Recipe } from '../model/Recipe';

export const toggleFavorite = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isFavorite } = req.body;

        const recipe = await Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        recipe.isFavorite = isFavorite;
        await recipe.save();

        res.json(recipe); // Возвращаем обновленный рецепт
    } catch (error) {
        console.error('Error toggling favorite:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const deleteRecipe = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const recipe = await Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        await recipe.destroy();
        res.json({
            success: true,
            message: 'Recipe deleted',
            recipeId: id
        });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'Server error' });
    }
};