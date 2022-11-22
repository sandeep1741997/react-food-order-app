import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Modal = (props) => {

    const Backdrop = props => <div className={classes.backdrop} onClick={props.onClose} />;

    const ModalOverlay = props => <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;