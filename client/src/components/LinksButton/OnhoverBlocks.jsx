import React from "react";
import { NavLink, useHistory  } from "react-router-dom";
import { Button } from "../prototype/Button/Button";
import { ReactComponent as CarGarage } from '../../common/img/icon/car_garage.svg';

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

export const LoginedBlock = ({setUserLogout, userName}) => {

    return (
        <div className="background_white text_center box_shadow_4 blockShow">
            <p style={{fontSize: "18px", marginBottom: 30, fontWeight: "bold", color: "#858585"}}>
                Welcome {userName && ", " + userName}
            </p>
            <p className="mgt5"><NavLink to="/"className="pointer_red" >Personal information</NavLink></p>
            <p className="mgt5"><NavLink to="/"className="pointer_red" >Orders</NavLink></p>
            <p className="mgt5"><NavLink to="/" className="pointer_red" >Wishlist</NavLink></p>
            <p className="mgt5"><NavLink to="/"className="pointer_red" >Garage</NavLink></p>
            <p className="mgt5"><NavLink to="/"className="pointer_red" >Address book</NavLink></p>
            <p className="mgt5"><NavLink to="/"className="pointer_red" >Payment cards</NavLink></p>
            <Button
                title={'Sign out'}
                type={'white'}
                classStyle={"mgt10"}
                click={()=>setUserLogout()}
            />
        </div>
    )
}

export const GarageBlock = ({isAuth}) => {
    const history = useHistory();
    return (
        
        <div className="background_white text_center box_shadow_4 blockShow">
            {isAuth ? <>
            <CarGarage />
            <Button
                title={'Add new vehicle'}
                type={'red'}
                classStyle={"mgt10"}
                // click={()=>setUserLogout()}
            /></> :
            <>
            <Button
                title={'Add new vehicle'}
                type={'red'}
                classStyle={"mgt10"}
                // click={()=>setUserLogout()}
            />
            <Button
                title={'Add new vehicle'}
                type={'red'}
                classStyle={"mgt10"}
                click={()=>history.push('admin')}
            />
            </>}
        </div>
    )
}