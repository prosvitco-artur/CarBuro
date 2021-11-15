import React, { useState } from "react";
import { ReactComponent as VectorClose } from '../../../common/img/icon/vector_language.svg';
import { ReactComponent as VectorOpen } from '../../../common/img/icon/VectorClose.svg';
import style from './Select.module.css'

const Select = ({ currentData, allCurrentLang, editLang }) => {

    const [isOpen, setOpen] = useState(false);

    const toogleOpen = () => {
        setOpen(!isOpen)
    }
    
    const changeCurrentLang = (index) => {
        debugger
        editLang(index)
    }

    return (
        <div onClick={() => toogleOpen()} className="rubik_regular">
            <span className='pointer_red'>{allCurrentLang[currentData]}</span>
            {isOpen ? <VectorClose /> : <VectorOpen />}
            {isOpen &&
                <div className="">
                    {allCurrentLang.map((title, index) => ( currentData != index && <p key={title} onClick={() => changeCurrentLang(index)} className="pointer_red">{title}</p>))}
                </div>
            }
        </div>
    )
}

export default Select;