import { Field, Form, Formik } from "formik";
import React from "react";
import style from './Modal.module.css';

import { ReactComponent as Instagram } from '../../common/img/icon/instagram.svg';
import { ReactComponent as Twitter } from '../../common/img/icon/twitter.svg';
import { ReactComponent as Facebook } from '../../common/img/icon/facebook.svg';
import { Button } from "../prototype/Button/Button";

export const Login = ({ editModalContent, closeFunc, loginFunc }) => {

    return (
        <div className={style.form}>
            <div className="text_center">
                <p>Welcome</p>
                <p>Sign in to continue</p>
            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                onSubmit={async (values) => {
                    let data = await loginFunc(values);
                    // let { status, data } = await loginUser(values);
                    // if (status === 200) {
                    //     closeFunc();
                    // }
                }}
            >
                <Form style={{ marginTop: "-17" }}>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="email">Email</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="email" name="email" type="text" placeholder="email@mail.com" />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="password">Password</label>

                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" type='password' />
                    </div>
                    <div className="mg-b-20">
                        <div className="float_left" style={{ textAlign: "left" }}>
                            <Field id="rememberMe" name="rememberMe" type='checkbox' />
                            <label className="font-size-10" htmlFor="rememberMe">Remember me</label>
                            <span className="input-link font-size-10 float_right" onClick={() => editModalContent('forgotPassword')}>Forgot password?</span>
                        </div>
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
            <div className="text_center">
                <ul className="mg-b-30">
                    <li className="mg-b-20">or connect with</li>
                    <li>
                        <Instagram style={{ marginRight: '20px' }} />
                        <Twitter style={{ marginRight: '20px' }} />
                        <Facebook />
                    </li>
                </ul>
                <p className="color_grey size_12">Don’t have Account? <span onClick={() => editModalContent('register')}>Sign up</span></p>
            </div>
        </div>
    )
}

