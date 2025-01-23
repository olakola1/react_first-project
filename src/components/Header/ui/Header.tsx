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
                       <a className={style.navbar} href="/">Каталог рецептов</a>
                       <a className={style.navbar} href="/">Поделись рецептом</a>
                       <a href="https://t.me/a_useful_recipe_bot">
                       <img src={icon} alt="Телеграм" className={style.icon}/>
                   </a>
        </div>
</nav>
</div>
    );
};

