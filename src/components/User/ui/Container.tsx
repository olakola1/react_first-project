import style from './style.module.scss'
import {ReactNode} from "react";

interface IProps {
    children: ReactNode
}

export const Container = ({ children }: IProps)  => {

    return (
        <div className={style.container}>
            {children}
        </div>
    );
};