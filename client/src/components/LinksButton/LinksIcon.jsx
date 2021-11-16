import React from "react";
import { NavLink } from "react-router-dom";
import style from './LinksButton.module.css';

const LinckIcon = ({ icon, type, linckAction, children, title }) => {
    if (type === 'button') {
        return (
            <div className={style.linksIcon}>
                <button onClick={() => linckAction('login')} className={style.button + " rubik_regular size_14 pointer_red"}>
                    {icon}
                    <p>{title}</p>
                </button>
                {children}
            </div>
        )
    } else if (type === 'link') {
        return (
            <NavLink to={linckAction} className={style.button + " rubik_regular size_14 pointer_red"}>
                {icon}
                <p>$3042</p>
            </NavLink>
        )
    }
}

export default LinckIcon;