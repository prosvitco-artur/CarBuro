import React from "react";
import NavBar from "./NavBar";
import CategoryNav from './CategoryNav';
import Sidebar from './Sidebar';
import { connect } from "react-redux";
import { setCategory } from "../../redux/CategoryReduser";


const Header = (props) => {
    props.setCategory()
    return (
        <>
            <NavBar />
            <Sidebar />
            <CategoryNav />
        </>
    )
}

export default connect(null, {setCategory })(Header);