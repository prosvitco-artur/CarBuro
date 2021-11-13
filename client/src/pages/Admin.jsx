import React from "react";
import AddCategory from "../components/Admin/AddCategory";
import { Button } from "../components/prototype/Button/Button";

const Admin = () => {
    return (
        <div className="container">
            <Button
                title={'add product'}
                type={'red'}
                classStyle={"right"}
            />
            <Button
                title={'Add category'}
                type={'red'}
                classStyle={"right"}
            />
            <Button
                title={'Add brand'}
                type={'red'}
                classStyle={"right"}
            />

            <AddCategory />
        </div>
    )
}

export default Admin;