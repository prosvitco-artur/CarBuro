import React from "react";
import style from './Button.module.css';

export const Button = ({ title, type, click, classStyle }) => {

    let callBackClickFunk=()=> {
        click()
    }

    var typeClasses = type === 'red' ? style.colorRed : style.colorWhite;

    return (
        <button onClick={()=>callBackClickFunk()} className={typeClasses + " " + style.button + " " + classStyle}>
            {title}
        </button>
    )
}