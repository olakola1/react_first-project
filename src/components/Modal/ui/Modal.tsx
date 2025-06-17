import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import { Recipe } from '../../../store/catalog/recipeReduser';
import { ChangeEvent } from "react";

export interface ModalIProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (recipe: Recipe) => void;
}

type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'healthy';

export const RecipeModal = ({ isOpen, onClose, onSave }: ModalIProps) => {
    const [newRecipe, setNewRecipe] = useState<Recipe>({
        id: 0,
        name: '',
        ingredients: '',
        time: '',
        image: '',
        category: 'breakfast',
    });

    const categoryOptions: { value: RecipeCategory; label: string }[] = [
        { value: 'breakfast', label: 'Завтрак' },
        { value: 'lunch', label: 'Обед' },
        { value: 'dinner', label: 'Ужин' },
        { value: 'dessert', label: 'Десерт' },
        { value: 'healthy', label: 'Здоровое питание' },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewRecipe({
            ...newRecipe,
            [name]: name === 'time' ? Number(value) : value,
        });
    };

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewRecipe({
                    ...newRecipe,
                    image: reader.result as string,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const generateUniqueId = () => Math.floor(Math.random() * 1000000);

    const handleSave = () => {
        const recipeToSave: Recipe = {
            ...newRecipe,
            id: generateUniqueId(),
            image: newRecipe.image,
            category: newRecipe.category || 'breakfast',
        };
        onSave(recipeToSave);
        onClose();
        setNewRecipe({
            id: 0,
            name: '',
            ingredients: '',
            time: '',
            image: '',
            category: 'breakfast',
        });
    };

    if (!isOpen) return null;

    return (
        <div className={style.modal_container}>
            <div className={style.modal_content}>
                <h2 className={style.modal_wrapper}>Добавить рецепт</h2>
                <label className={style.modal_label}>
                    Название:
                    <input
                        type="text"
                        name="name"
                        value={newRecipe.name}
                        onChange={handleInputChange} />
                </label>

                <label className={style.modal_label}>
                    Категория:
                    <select
                        name="category"
                        value={newRecipe.category}
                        onChange={handleInputChange}
                        className={style.modal_select}
                    >
                        {categoryOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>

                <label className={style.modal_label}>
                    Ингредиенты:
                    <textarea
                        name="ingredients"
                        value={newRecipe.ingredients}
                        onChange={handleInputChange} />
                </label>

                <label className={style.modal_label}>
                    Время приготовления:
                    <input
                        type="text"
                        name="time"
                        value={newRecipe.time}
                        onChange={handleInputChange} />
                </label>

                <label className={style.modal_label}>
                    Фото:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange} />
                </label>

                <div className={style.modal_buttons}>
                    <button className={style.modal_button} onClick={handleSave}>Сохранить</button>
                    <button className={style.modal_button} onClick={onClose}>Отмена</button>
                </div>
            </div>
        </div>
    );
};