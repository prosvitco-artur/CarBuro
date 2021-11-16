import React, { useState } from "react";
import { ReactComponent as SelectelVector } from '../../common/img/nessesary/SelectelVector.svg';
import { ReactComponent as VectorClose } from '../../common/img/nessesary/VectorClose.svg';

const Selectel = ({ children, selectData }) => {

    let [isOpen, changeOpen] = useState(false);

    let tooggleOpen = ( ) => {
        changeOpen(!isOpen);
    }

    return (
        <div onClick={()=> tooggleOpen()} className={isOpen ? 'background_white float_left radius_50 select box_shadow_4 ' : 'background_grey float_left radius_50 select opacity7' }>
            <span>Year</span>
            { isOpen ?
            <VectorClose style={{float: 'right', marginTop: '6px'}} />
            : <SelectelVector style={{float: 'right', marginTop: '6px'}} />
            }
            </div>
    )
}

export default Selectel;