import React from 'react';
import style from './style.module.scss'
import logo from '../../../img/Logo.svg'
import icon from '../../../img/telegram.png'

export const Header = () => {
    return (
        <div className={style.container}>
              <div className="logo">
                <img src={logo} alt="Логотип"/>
              </div>
               <nav>
                   <div className={style.nav}>
                       <label htmlFor="">
                           <input className={style.form_input}
                                  type={"text"}
                                  placeholder="Поиск" />
                           <button className={style.button_input}>
                               <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20"
                                    height="20">
                                   <path
                                       d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
                               </svg>
                           </button>
                       </label>
                       <a className={style.navbar} href="/">Каталог рецептов</a>
                       <a className={style.navbar} href="/">Моя книга рецептов</a>
                       <a href="https://t.me/a_useful_recipe_bot">
                           <img src={icon} alt="Телеграм" className={style.icon}/>
                       </a>
                   </div>
               </nav>
        </div>
    );
};

