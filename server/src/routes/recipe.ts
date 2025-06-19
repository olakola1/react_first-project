import { Router } from 'express';
import { createRecipe, getRecipes } from '../controllers/recipeController';
import { toggleFavorite } from '../controllers/favoriteController';

const router = Router();

router.post('/recipes', createRecipe);
router.get('/recipes', getRecipes);

router.patch('/recipes/:id/favorite', toggleFavorite);

export default router;