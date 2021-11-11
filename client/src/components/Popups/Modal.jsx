import React, { useState } from "react";
import Modal from "react-modal";
import {ReactComponent as Close} from '../../common/img/icon/CloseIcon.svg';
import { Login } from "./Login";

const ModalPopup = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
            width: '470px'
        },
    };

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
      }

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog" widthPopup={'270px'}
                style={customStyles}
                // onRequestClose={closeModal}
            >
                <Close onClick={closeModal} style={{float: 'right'}} />
                <Login />
            </Modal>
        </>
    )
}

export default ModalPopup;