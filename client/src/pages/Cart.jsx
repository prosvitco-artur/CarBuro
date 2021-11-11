import React, { useState } from "react";
import { Login } from "../components/Auth/AuthPopup";
import Modal from "react-modal";

const Cart = () => {

    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
        setIsOpen(!isOpen);
      }

    return (
        <div
       
        >
            <Modal  
             isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"widthPopup={'270px'}
        // onAfterOpen={afterOpenModal}
        >
                <Login />
            </Modal>
        </div>
    )
}

export default Cart;