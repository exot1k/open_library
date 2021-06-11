import React, {useState} from "react";
import styles from "../../All.module.css";
import noBookImg from "../../../images/no-book.png"
import Detail from "../../DetailPopup/DetailPopup";
import DetailBookItem from "../../BookTable/DetailBookItem/DetailBookItem";

function BookItem(props) {
    const firstPublish = props.docsData.publish_year ? Math.min(...props.docsData.publish_year) : '';
    const authorReducer = (accumulator, currentValue) => accumulator + ', ' + currentValue;
    const authorName = props.docsData.author_name ? props.docsData.author_name.reduce(authorReducer) : 'Unknown author';
    const bookImg = props.docsData.bookImageM ? props.docsData.bookImageM : noBookImg;
    const [isOpen, setOpen] = useState(false);


    return <div>

        <li className={styles.bookItem} onClick={(e) => setOpen(true)}>
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
        <Detail isOpen={isOpen} onClose={(e) => setOpen(false)} title={props.docsData.title}
                content={
                    <DetailBookItem bookImg={props.docsData.bookImageL} authorName={authorName}
                                    firstPublish={firstPublish}
                                    title={props.docsData.title}/>
                }>
        </Detail>
    </div>
}

export default BookItem;