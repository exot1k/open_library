import React, { Component } from 'react';
import styles from "DetailDialog.module.css";

let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


function Dialog(props) {
   /* const Dialog = ( <div style={styles.dialogStyles}>
        <button style={dialogCloseButtonStyles} onClick={props.onClose}>x</button>

        <div>{props.children}</div>
    </div> ) */
    const Dialog = ( <div  style={styles.detailDialogStyles}>
        test
    </div> )

    return ( props.isOpen ? Dialog : null );
}

export default Dialog;