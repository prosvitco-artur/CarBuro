import React from "react";
import { Formik, Field, Form } from 'formik';
import { Button } from "../prototype/Button/Button";

import style from './Modal.module.css';

const AddProduct = (props) => {

    // const {name, price, categoryId, brandId, info } = req.body;

    return (

        <div className={style.form}>
            <Formik
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
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="email">Name</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="name" name="name" type="text" placeholder="name" />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="price">price</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="price" name="price" placeholder="price" type='text' />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="categoryId">CategoryId</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="categoryId" name="categoryId" placeholder="categoryId" type='text' />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="brandId">BrandId</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="brandId" name="brandId" placeholder="brandId" type='text' />
                    </div>
                    <div className="text_center mg-b-30">
                        <Button
                            title={'Sign in'}
                            type={'red'}
                            classStyle={""}
                        />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddProduct;