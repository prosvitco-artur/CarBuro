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
        <div style={{marginTop: 4}} onClick={() => toogleOpen()} className={style.language + " size_14 float_right rubik_regular "}>
            <div className='pointer_red'>{allCurrentLang[currentData]}
            {isOpen ? <VectorClose style={vectorStyle} /> : <VectorOpen style={vectorStyle} />}
            </div>
            {isOpen &&
            <ul className="box_shadow_4 background_white">
                    {allCurrentLang.map((title, index) => ( currentData !== index && <li key={title} onClick={() => editLang(index)} className="text_center language_list pointer_red">{title}</li>))}
                
            </ul>
            }
        </div>
    )
}                    

export default Select;