import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import BookItem from "./BookItem/BookItem";
import styles from "../All.module.css";
import Preloader from "../Common/Preloader/Preloader";
import {useLocation} from 'react-router-dom'
import {getBookData} from "../../Redux/OpenLibraryReducer";

function BookList(props) {

    const [currentPage, setCurrentPage] = useState(0)
    const location = useLocation()
    const pagePortion = 10;
    const lastItem = (currentPage + 1) * pagePortion;
    const [isPageFetching, setIsPageFetching] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if (isPageFetching) {

            const queryString = require('query-string');
            const parsedQuery = queryString.parse(location.search);
            if (props.docs.length < lastItem && !props.isFetching) {
                props.getBookData(Object.keys(parsedQuery)[0], parsedQuery[Object.keys(parsedQuery)[0]], Math.ceil(lastItem / 100) + 1)
            }
            setCurrentPage(prevState => prevState + 1)
            setIsPageFetching(false)
        }
    }, [isPageFetching])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100 ) {
            setIsPageFetching(true);
        }
    }

    return <div>
         <ul className={styles.bookTable}>
            {props.docs.slice(0, lastItem).map((el, index) => {
                return <BookItem docsData={el} key={index}/>
            })}
        </ul>
        {props.isFetching ? <Preloader/> : null}
    </div>
}

let mapStateToProps = (state) => {
    return {
        docs: state.openLibrary.docs,
        totalCount: state.openLibrary.numFound,
        isFetching: state.openLibrary.isFetching
    }
}

let mapDispatchToProps = {getBookData}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
