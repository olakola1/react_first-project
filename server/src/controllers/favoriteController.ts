import { Request, Response } from 'express';
import { Recipe } from '../model/Recipe';

export const toggleFavorite = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        // Устанавливаем isFavorite в false
        recipe.isFavorite = false;
        await recipe.save();

        res.json({
            success: true,
            message: 'Recipe removed from favorites',
            recipeId: id
        });
    } catch (error) {
        console.error('Error toggling favorite:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const getFavorites = async (req: Request, res: Response) => {
    try {
        const favorites = await Recipe.findAll({
            where: { isFavorite: true }
        });
        res.json(favorites);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Server error' });
    }
};