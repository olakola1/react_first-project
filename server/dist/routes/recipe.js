"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipeController_1 = require("../controllers/recipeController");
const favoriteController_1 = require("../controllers/favoriteController");
const router = (0, express_1.Router)();
router.post('/recipes', recipeController_1.createRecipe);
router.get('/recipes', recipeController_1.getRecipes);
router.delete('/recipes/:id', recipeController_1.deleteRecipe);
router.patch('/recipes/:id/favorite', favoriteController_1.toggleFavorite);
exports.default = router;
