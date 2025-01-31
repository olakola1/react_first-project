import React from 'react';
import style from './style.module.scss';
import logo from '../../../img/Logo.svg';
import icon from '../../../img/telegram.png';
import {Search} from "../../Search";
import {Link} from "react-router";


export const Header = () => {

    return (
        <div className={style.container}>
            <Link to="/home">
            <div className="logo">
                <img src={logo} alt="Логотип" />
            </div>
                </Link>

            <nav>

                <div className={style.nav}>
                    <Search/>
                    <Link to="/catalog">
                    <a className={style.navbar} href="/">Моя книга рецептов</a>
                        </Link>
                    <a href="https://t.me/a_useful_recipe_bot">
                        <img src={icon} alt="Телеграм" className={style.icon} />
                    </a>
                </div>
            </nav>
        </div>
    );
};