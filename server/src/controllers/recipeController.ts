import { Request, Response } from 'express';
import { Recipe } from '../model/Recipe';

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const { title, ingredients, time, image } = req.body;

        const recipe = await Recipe.create({
            title,
            ingredients,
            time,
            image: image || null
        });
        res.status(201).json(recipe);

    } catch (error) {
        console.error('Error creating recipe:', error);
        res.status(400).json({ error: 'Invalid data' });
    }
};

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
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