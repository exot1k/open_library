import {getBookData} from "../../Redux/OpenLibraryReducer";
import styles from "../All.module.css";
import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import useDelay from "../Common/UseDelay/useDelay";
import searchIcon from '../../images/Без имени-1.png'
import {useHistory } from "react-router-dom";



function SearchField(props) {

    const [queryResult, setQueryResult] = useState("")
    const [queryValue, setQueryValue] = useState("q")
    const [isPressSearch, setPressSearch] = useState(false)
    const delaySearchResult = useDelay(queryResult, 2000)
    const history = useHistory()

    useEffect(
        () => {
            if (delaySearchResult && !isPressSearch) {
                props.getBookData(queryValue, queryResult)
            }
            setPressSearch(false)
        },
        [delaySearchResult]
    )

    useEffect(() => {
        const queryString = require('query-string');
        const params = {}
        if (queryResult && queryValue) {
            params[queryValue] = queryResult;
        } else {
            delete  params[queryValue]
        }
        history.push({search:  queryString.stringify(params)})
    }, [queryResult, history,queryValue])

    function onClickButton() {
        setPressSearch(true)
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

export default
    connect((state) => {
    }, mapDispatchToProps)(SearchField);