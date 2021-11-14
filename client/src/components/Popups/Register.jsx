import { Field, Form, Formik } from "formik";
import React from "react";
import style from './Modal.module.css';

import { ReactComponent as Instagram } from '../../common/img/icon/instagram.svg';
import { ReactComponent as Twitter } from '../../common/img/icon/twitter.svg';
import { ReactComponent as Facebook } from '../../common/img/icon/facebook.svg';
import { Button } from "../prototype/Button/Button";

export const Register = ({ editModalContent, closeFunc, registerFunc }) => {

    return (
        <div className={style.form}>
            <div className="text_center">
                <p>Create account to continue</p>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    let data = await registerFunc(values);
                    console.log(data);
                }}
            >
                <Form style={{ marginTop: "-17" }}>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="name">Name</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="name" name="name" type="text" placeholder="John Smith" />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="name">Email</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="email" name="email" type="text" placeholder="email@mail.com" />
                    </div>
                    <div className="float_left">
                        <label className="font-size-10" htmlFor="password">Password</label>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" type='password' />
                    </div>
                    <div className="text_center mg-b-30">
                        <Button
                            title={'Sign up'}
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
                <p className="color_grey size_12">Already have Account? <span onClick={() => editModalContent('login')}>Sign in</span></p>
            </div>
        </div>
    )
}

