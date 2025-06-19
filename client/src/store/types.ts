export interface Recipe {
    id: number;
    title: string;
    ingredients: string;
    time: number;
    image?: string;
    isFavorite?: boolean;
}

export interface DesertData {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image?: string;
}

export interface SoupData  {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

export interface HotterData  {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

export interface RecipeToCreate extends Omit<Recipe, 'id'> {}