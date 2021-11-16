import React from "react";
import { Button } from "../prototype/Button/Button";

export const SignInBlock = ({setCurrentModal}) => {

    return (
        <div className="background_white text_center box_shadow_4 blockShow">
            <Button
                title={'Sign in'}
                type={'red'}
                classStyle={""}
                click={()=>setCurrentModal('login')}
            />
            <Button
                title={'Sign up'}
                type={'red'}
                classStyle={"mgt10"}
                click={()=>setCurrentModal('register')}
            />
        </div>
    )
}