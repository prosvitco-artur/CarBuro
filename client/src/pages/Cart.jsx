import React, { useState } from "react";
import { Login } from "../components/Auth/AuthPopup";
import Popup from "../components/Popup";

const Cart = () => {

    const [showPopup, changeShowPopup] = useState('login');

    return (
        <div>
            {showPopup == 'login' && 
            <Popup widthPopup={'270px'}>
                <Login />
            </Popup>}
            {showPopup == 'register' && 
            <Popup widthPopup={'270px'}>
                <Login setShowRegister={changeShowPopup} />
            </Popup>
            }
        </div>
    )
}

export default Cart;