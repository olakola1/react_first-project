import React, { useState } from 'react';
import style from './style.module.scss';
import {Recipe} from '../../../interface/interface'
import {ModalIProps} from '../../../interface/interface'

export const RecipeModal: React.FC<ModalIProps> = ({ isOpen, onClose, onSave }) => {
    const [newRecipe, setNewRecipe] = useState<Recipe>({
        name: '',
        ingredients: '',
        time: '',
        photo: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewRecipe({ ...newRecipe, [name]: value });
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewRecipe({ ...newRecipe, photo: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        onSave(newRecipe);
        onClose();
        setNewRecipe({
            name: '',
            ingredients: '',
            time: '',
            photo: '',
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
                        onChange={handleInputChange}/>
                </label>
                <label className={style.modal_label}>
                    Ингредиенты:
                    <textarea
                    name="ingredients"
                    value={newRecipe.ingredients}
                    onChange={handleInputChange}/>
                </label>
                <label className={style.modal_label}>
                    Время приготовления:
                    <input
                    type="text"
                    name="time"
                    value={newRecipe.time}
                    onChange={handleInputChange}/>
                </label>
                <label className={style.modal_label}>
                    Фото:
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}/>
                </label>
                <button className={style.modal_button} onClick={handleSave}>Сохранить</button>
                <button className={style.modal_button} onClick={onClose}>Отмена</button>
            </div>
        </div>
    );
};