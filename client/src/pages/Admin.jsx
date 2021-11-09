import React from "react";
import AddCategory from "../components/Admin/AddCategory";

const Admin = () => {
    return(
        <div className="container">
            <button className="background_red radius_50 height_50">add product</button>
            <button className="background_red radius_50 height_50">add category</button>
            <button className="background_red radius_50 height_50">add brand</button>

            <AddCategory />
        </div>
    )
}

export default Admin;