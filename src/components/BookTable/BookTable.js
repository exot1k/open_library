import React from "react";
import {connect} from "react-redux";
import BookItem from "./BookItem/BookItem";
import styles from "../All.module.css";
import Preloader from "../Common/Preloader/Preloader";

function BookTable(props) {

    if (props.isFetching) {
        return <Preloader/>
    }

    return <div>
        <ul className={styles.bookTable}>
            {props.docs.map((el) => {
                return <BookItem docsData={el}/>
            })}
        </ul>
    </div>
}

let mapStateToProps = (state) => {
    return {
        docs: state.openLibrary.docs,
        isFetching: state.openLibrary.isFetching
    }
}

let mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(BookTable);
