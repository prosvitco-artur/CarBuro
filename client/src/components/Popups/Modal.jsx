import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { ReactComponent as Close } from '../../common/img/icon/CloseIcon.svg';
import { setCurrentModal } from '../../redux/GlobalReducer';
import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./Login";
import { Register } from "./Register";

const ModalPopup = ({ popup, setCurrentModal }) => {

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
    const closeModal = () => {
        setCurrentModal(null);
    }

    return (
        <>
            <Modal
                isOpen={popup ? true : false}
                style={customStyles}
                onRequestClose={closeModal}
            >
                <Close
                 onClick={closeModal} 
                 style={{ float: 'right' }} />
                {popup === "login" && <Login closeFunc={closeModal} editModalContent={setCurrentModal} /> }
                {popup === "forgotPassword" && <ForgotPassword  closeFunc={closeModal} /> }
                {popup === "register" && <Register editModalContent={setCurrentModal} closeFunc={closeModal} /> }
            </Modal>
        </>
    )
}

let mapStateToProps = (state) => {
    return { popup: state.global.popup }
}



export default connect(mapStateToProps, { setCurrentModal })(ModalPopup)