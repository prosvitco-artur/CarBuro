import React from "react";
import { Formik, Field, Form } from 'formik';
import { CategoryApiCreate } from "../../redux/axios/getApi";
import { Button } from "../prototype/Button/Button";

import style from './Modal.module.css';

const AddCategory = (props) => {

    return (
        <div className={style.form}>
            <Formik
                initialValues={{
                    name: '',
                    parentName: '',
                    brandId: '',
                }}
                onSubmit={async (values) => {
                    // await new Promise(
                    //     CategoryApiCreate(values)
                    // );
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="email">Name</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="name" name="name" type="text" placeholder="name" />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="parentName">parentName</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="parentName" name="parentName" placeholder="parentName" type='text' />
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
                            click={() => alert('test')}
                        />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddCategory;