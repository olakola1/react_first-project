import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IRecipe {
    id: number;
    name: string;
}

interface IRecipeContext {
    recipes: IRecipe[];
    addRecipe: (recipe: IRecipe) => void;
}

const RecipeContext = createContext<IRecipeContext | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    const addRecipe = (recipe: IRecipe) => {
        setRecipes(prevRecipes => [...prevRecipes, recipe]);
    };

    return (
        <RecipeContext.Provider value={{ recipes, addRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipeContext must be used within a RecipeProvider');
    }
    return context;
};