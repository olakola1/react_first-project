import { Request, Response } from 'express';
import { Recipe } from '../model/Recipe';

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const { title, ingredients, time, image } = req.body;

        // Валидация
        if (!title || !ingredients || !time) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const recipe = await Recipe.create({
            title,
            ingredients,
            time: Number(time),
            image: image || null
        });

        res.status(201).json(recipe);
    } catch (error) {
        console.error('Error creating recipe:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.findAll({
            order: [['id', 'DESC']] // Сортировка по новизне
        });
        res.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Server error' });
    }
};