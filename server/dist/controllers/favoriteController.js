"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.toggleFavorite = void 0;
const Recipe_1 = require("../model/Recipe");
const toggleFavorite = async (req, res) => {
    try {
        const { id } = req.params;
        const { isFavorite } = req.body;
        const recipe = await Recipe_1.Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        recipe.isFavorite = isFavorite;
        await recipe.save();
        res.json(recipe); // Возвращаем обновленный рецепт
    }
    catch (error) {
        console.error('Error toggling favorite:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.toggleFavorite = toggleFavorite;
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe_1.Recipe.findByPk(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        await recipe.destroy();
        res.json({
            success: true,
            message: 'Recipe deleted',
            recipeId: id
        });
    }
    catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.deleteRecipe = deleteRecipe;
