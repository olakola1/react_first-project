import express from 'express';
import { createRecipe, getRecipes } from './routes/recipe';

const app = express();
app.use(express.json());

// Роуты
app.post('/api/recipes', createRecipe);
app.get('/api/recipes', getRecipes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});