import React from 'react';
import preloader from '../../common/img/nessesary/preloader.gif'
import Modal from "react-modal";
import { connect } from "react-redux";
import { setCurrentModal } from '../../redux/GlobalReducer';

const Preloader = ({ preload }) => {
    debugger
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
            background: 'none',
            border: 'none'
        },
    };
    return (
        <Modal
            isOpen={preload ? true : false}
            style={customStyles}
            ariaHideApp={false}
        >
            <div>
                <img src={preloader} alt="Preloader" />
            </div>
        </Modal>
    )
}

let mapStateToProps = (state) => {
    return {
        preload: state.global.preload
    }
}



export default connect(mapStateToProps, { setCurrentModal })(Preloader)