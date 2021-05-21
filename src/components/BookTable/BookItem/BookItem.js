import React from "react";
import styles from "../../All.module.css";
import noBookImg from "../../../images/no-book.png"

function BookItem(props) {
    const firstPublish = props.docsData.publish_year ? Math.min(...props.docsData.publish_year) : '';
    const authorReducer = (accumulator, currentValue) => accumulator + ', ' + currentValue;
    const authorName = props.docsData.author_name ? props.docsData.author_name.reduce(authorReducer) : 'Unknown author';
    const bookImg = props.docsData.bookImageM ? props.docsData.bookImageM : noBookImg;
    return <li className={styles.bookItem}>
        <span>
            <img src={bookImg}/>
        </span>

        <div className={styles.detailData}>
            <div>
                <h3>{props.docsData.title}</h3>
            </div>
            <span>By {authorName}</span>
            <span className={styles.firstPublish}>First published in {firstPublish}</span>
        </div>
    </li>
}

export default BookItem;