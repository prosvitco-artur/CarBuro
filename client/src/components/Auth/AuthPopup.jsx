import { Field, Form, Formik } from "formik";
import React from "react";

export const Login = (props) => {
    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Welcome</p>
                <p>Sign in to continue</p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        rememberMe: false
                    }}
                    onSubmit={async (values) => {
                        // await new Promise(
                        //     CategoryApiCreate(values)
                        // );
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <div className="float_left"><label className="font-size-10" htmlFor="name">Email</label></div>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="email" name="email" type="text" placeholder="email@mail.com" />

                        <div className="float_left"><label className="font-size-10" htmlFor="password">Password</label></div>
                        <Field className="mg-b-10 background_grey box_shadow_4 radius_50 input" id="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" type='password' />

                        <div style={{ marginBottom: "40px" }}>
                            <div className="float_left" style={{ textAlign: "left" }}>
                                <Field id="rememberMe" name="rememberMe" type='checkbox' />
                                <label className="font-size-10" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div className="float_right" style={{ textAlign: "right" }}>
                            <a className="input-link font-size-10" href='#'>Forgot password?</a>
                            </div>
                        </div>

                        <div>
                            <button className="background_red radius_50" type="submit">Sign in</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

