import React, { useState } from "react";
import { ReactComponent as VectorClose } from '../../../common/img/icon/vector_language.svg';
import { ReactComponent as VectorOpen } from '../../../common/img/icon/VectorClose.svg';
import style from './Select.module.css'

const Select = ({ currentData, allCurrentLang, editLang }) => {
    const [isOpen, setOpen] = useState(false);

    const toogleOpen = () => {
        setOpen(!isOpen)
    }
    const vectorStyle = {
        marginLeft: 5,
        paddingBottom: 2,
    }

    return (
        <div onClick={() => toogleOpen()} className="rubik_regular">
            <span className='pointer_red'>{allCurrentLang[currentData]}</span>
            {isOpen ? <VectorClose style={vectorStyle} /> : <VectorOpen style={vectorStyle} />}
            {isOpen &&
            <div className={style.box_select}>
                <div className={style.scrolling}>
                    {allCurrentLang.map((title, index) => ( currentData !== index && <p key={title} onClick={() => editLang(index)} className="pointer_red">{title}</p>))}
                </div>
            </div>
            }
        </div>
    )
}

export default Select;