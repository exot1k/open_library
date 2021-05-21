import loader from "../../../images/loader_book2.gif";
import React from "react";
import styles from "../../All.module.css"
let Preloader = (props) => {
    return <div><img src={loader} className={styles.preloaderImg}/> </div>
}
export default Preloader