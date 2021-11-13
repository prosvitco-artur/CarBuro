import React from "react";
import { Formik, Field, Form } from 'formik';
import { Button } from "../prototype/Button/Button";

const AddProduct = (props) => {

    // const {name, price, categoryId, brandId, info } = req.body;

    return (<Formik
        initialValues={{
            name: '',
            price: '',
            categoryId: '',
            brandId: '',
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
    >
        <Form>
            <div>
                <label htmlFor="name">Product Name</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="name" name="name" placeholder="Title" />
            </div>
            <div>
                <label htmlFor="price">Product Price</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="price" name="price" placeholder="Price" />
            </div>
            <div>
                <label htmlFor="categoryId">Category</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="categoryId" name="categoryId" placeholder="categoryId" />
            </div>
            <div>
                <label htmlFor="brandId">Category</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="brandId" name="brandId" placeholder="brandId" />
            </div>

            <Button
                title={'submit'}
                type={'red'}
                classStyle={""}
            />
        </Form>
    </Formik>
    )
}

export default AddProduct;