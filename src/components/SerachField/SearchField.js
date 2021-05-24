import {getBookData} from "../../Redux/OpenLibraryReducer";
import styles from "../All.module.css";
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import useDelay from "../Common/UseDelay/useDelay";
import searchIcon from '../../images/Без имени-1.png'

function SearchField(props) {

    const [queryResult, setQueryResult] = useState("")
    const [queryValue, setQueryValue] = useState("q")
    const delaySearchResult = useDelay(queryResult, 2000)

    useEffect(
        () => {
            if (delaySearchResult) {
                props.getBookData(queryValue, queryResult)
            }
        },
        [delaySearchResult]
    )

    function onClickButton() {
        props.getBookData(queryValue, queryResult)
    }

    return <div className={styles.searchBlock}>
        <select className={styles.queryField} value={queryValue}
                onChange={e => setQueryValue(e.target.value)}>
            <option value={"q"}>All</option>
            <option value={"title"}>Title</option>
            <option value={"author"}>Author</option>
        </select>
        <input onChange={e => setQueryResult(e.target.value)} value={queryResult} className={styles.searchField}/>
        <button className={styles.searchButton} onClick={onClickButton}><img src={searchIcon}/></button>
    </div>
}

const mapDispatchToProps = {
    getBookData
}

export default connect((state) => {
}, mapDispatchToProps)(SearchField);