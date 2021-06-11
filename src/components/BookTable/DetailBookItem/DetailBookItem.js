import React, {useState} from 'react';
import noBookImg from "../../../images/no-book.png";
import styles from "../../All.module.css";

function DetailBookItem(props) {
    const bookImg = props.bookImg ? props.bookImg : noBookImg;
    return (<div>
             <span>
            <img src={bookImg}/>
        </span>
            <div className={styles.detailData}>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <span>By {props.authorName}</span>
                <span className={styles.firstPublish}>First published in {props.firstPublish}</span>
            </div>
        </div>
    );
}

export default DetailBookItem;
