import React from "react";
import NavBar from "./NavBar";
import CategoryNav from './CategoryNav';
import Sidebar from './Sidebar';


const Header = (props) => {
    return (
        <>
            <NavBar />
            <Sidebar />
            <CategoryNav />
        </>
    )
}

export default Header;