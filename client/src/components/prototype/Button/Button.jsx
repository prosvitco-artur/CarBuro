import React from "react";
import style from './Button.module.css';

export const Button = ({ title, classStyle, disabled=false }) => {
    return (
        <button disabled={disabled}
            className={style.button + " " + style.colorRed}>
            {title}
        </button>
    )
}