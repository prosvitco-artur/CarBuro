import React, { useState } from "react";
import { ReactComponent as SelectelVector } from '../../common/img/nessesary/SelectelVector.svg';
import { ReactComponent as VectorClose } from '../../common/img/nessesary/VectorClose.svg';

const Selectel = ({ children, selectData }) => {

    let [isOpen, changeOpen] = useState(false);
    let [currentOption, setOption] = useState('Year');

    let tooggleOpen = () => {
        changeOpen(!isOpen);
    }

    // let chengeCurrentData = (value) => {
    //     setOption(value);
    // }

    return (
        <div onClick={() => tooggleOpen()} className={isOpen ? 'background_white float_left radius_50 select box_shadow_4 ' : 'background_grey float_left radius_50 select opacity7'}>
            <span>{currentOption}</span>
            {isOpen ?
                <VectorClose style={{ float: 'right', marginTop: '6px' }} />
                : <SelectelVector style={{ float: 'right', marginTop: '6px' }} />
            }
            {/* <div className="box_select box_shadow_4 background_white">
                <div className="scrolling">
                    <p onClick={() => chengeCurrentData('2021')} className="pointer_red">2021</p>
                    <p className="pointer_red">2020</p>
                    <p className="pointer_red">2019</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                    <p className="pointer_red">2018</p>
                </div>
            </div> */}
        </div>
    )
}

export default Selectel;