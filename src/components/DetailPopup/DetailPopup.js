import React from "react";
import styles from "../../All.module.css";


function Detail(props) {
    const Dialog = (<div className={styles.detailDialog}>
        <button className={styles.dialogCloseButtonStyles} onClick={props.onClose}>x</button>
        <div>{props.children}</div>
    </div>)
    return props.isOpen ? Dialog : null
}

export default Detail;