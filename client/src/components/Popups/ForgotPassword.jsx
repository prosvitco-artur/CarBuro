import { Field, Form, Formik } from "formik";
import React from "react";
import { loginUser } from "../../redux/axios/getApi";
import style from './Modal.module.css';

export const ForgotPassword = (props) => {
    return (
        <div className={style.form}>
            <div className="text_center">
                <p>Forgot password?</p>
                <p>You can reset your password here</p>
            </div>
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={async (values) => {
                    let { status, data } = await loginUser(values);
                    if (status === 200) {
                        console.log(data.token);
                    }
                }}
            >
                <Form className={style.forgottForm}>
                    <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" name="email" type="text" placeholder="email@mail.com" />
                    <button className="background_red radius_50" type="submit">Sign in</button>
                </Form>
            </Formik>
        </div>
    )
}