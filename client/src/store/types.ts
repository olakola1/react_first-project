export interface Recipe {
    id: number;
    title: string;
    ingredients: string;
    time: number;
    image?: string;
}

export interface RecipeToCreate extends Omit<Recipe, 'id'> {}