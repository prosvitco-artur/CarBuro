import React from "react";
import { NavLink } from 'react-router-dom';
import SelectLanguages from "../prototype/SelectLanguages/SelectLanguages";
import { connect } from "react-redux";
import { changeUserLanguages } from '../../redux/GlobalReducer';


const NavBar = (props) => {
    return (
        <div className="box_shadow_4">
            <div className="container nav_menu">
                <div className="float_left">
                    <span className="rubik_regular size_14 info_list list">(302) 555-0120</span>
                    <span className="rubik_regular size_14 info_list list">(302) 555-0103</span>
                    <span className="rubik_regular size_14 info_list list">9:00 - 22:00</span>
                </div>
                <div style={{marginLeft: '300px'}} className="float_left">
                    {props.isAuth && <NavLink to={"/admin"} className="rubik_regular size_14 info_list list pointer_red">Admin</NavLink>}
                    <NavLink to={"/home"} className="rubik_regular size_14 info_list list pointer_red">Home</NavLink>
                    <NavLink to={"/about"} className="rubik_regular size_14 info_list list pointer_red">About</NavLink>
                    <NavLink to={"/delivery"} className="rubik_regular size_14 info_list list pointer_red">Delivery</NavLink>
                    <NavLink to={"/contacts"} className="rubik_regular size_14 info_list list pointer_red">Contacts</NavLink>
                    <NavLink to={"/help"} className="rubik_regular size_14 info_list list pointer_red">Help</NavLink>
                </div>
                <SelectLanguages allCurrentLang={props.languages} editLang={props.changeUserLanguages} currentData={props.currentLanguages} />
            </div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        currentLanguages: state.global.currentLanguages,
        languages: state.global.languages,
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, { changeUserLanguages })(NavBar);