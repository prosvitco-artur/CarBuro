import React from "react";
import {ReactComponent as VectorLang} from '../common/img/icon/vector_language.svg';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <div className="box_shadow_4">
            <div className="container nav_menu">
                <div style={{marginRight: '364px', marginTop: '11px'}} className="float_left">
                    <span className="rubik_regular size_14 info_list list">(302) 555-0120</span>
                    <span className="rubik_regular size_14 info_list list">(302) 555-0103</span>
                    <span className="rubik_regular size_14 info_list list">9:00 - 22:00</span>
                </div>
                <div style={{ marginRight: '23px', marginTop: '11px' }} className="float_left">
                    <NavLink to={"/home"} className="rubik_regular size_14 info_list list pointer_red">Home</NavLink>
                    <NavLink to={"/about"} className="rubik_regular size_14 info_list list pointer_red">About</NavLink>
                    <NavLink to={"/delivery"} className="rubik_regular size_14 info_list list pointer_red">Delivery</NavLink>
                    <NavLink to={"/contacts"} className="rubik_regular size_14 info_list list pointer_red">Contacts</NavLink>
                    <NavLink to={"/help"} className="rubik_regular size_14 info_list list pointer_red">Help</NavLink>
                </div>
                <div className="float_left language">
                    <div className="rubik_regular size_14" style={{ marginLeft: '20px' }}>
                        EN
                        <VectorLang />
                    </div>
                    {/*<ul className="box_shadow_4 background_white">*/}
                    {/*    <li className="rubik_regular size_14 text_center language_list pointer_red">UA</li>*/}
                    {/*    <li className="rubik_regular size_14 text_center language_list pointer_red">RU</li>*/}
                    {/*    <li className="rubik_regular size_14 text_center language_list pointer_red">DE</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    )
}

export default Header;