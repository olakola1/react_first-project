import React from 'react';
import style from './style.module.scss'

export const Input = () => {
    return (
        <div>
           <label htmlFor="">
               <input type={"text"} width={500}/>
               <button>найти</button>
           </label>
        </div>
    );
};
