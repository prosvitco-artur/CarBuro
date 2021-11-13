import React from "react";
import style from './Button.module.css';

export const Button = ({ title, type, click, classStyle }) => {

    var typeClasses = type === 'red' ? style.colorRed : style.colorWhite;

    return (
        <button className={typeClasses + " " + style.button}>
            {title}
        </button>
    )
}