import React from "react";
import styles from "../All.module.css";


function Detail(props) {

    const Dialog = (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                <div className= {styles.modalHeader} >
                    <h3 className={styles.modalTitle}>{props.title}</h3>
                    <span className={styles.modalClose} onClick={props.onClose}>&times;</span>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalContent}>{props.content}</div>
                </div>
            </div>
        </div>
    )
    return props.isOpen ? Dialog : null


}

export default Detail;