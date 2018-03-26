import React from 'react';
import Modal from 'react-modal';
import './../css/DeleteModal.css'

const DeleteModal = (props) => {

    return (
        <Modal 
            isOpen= {props.isOpen}
            contentLabel="Delete Pet"
            className="Modal"
        >
        </Modal>
    )
}

export default DeleteModal;