import {openLibraryAPI} from "../API/OpenLibraryAPI";
import React from "react";

const ADD_TODO = 'ADD_TODO'
const CHANGE_FETCHING = 'CHANGE_FETCHING'
const imageLink = 'https://covers.openlibrary.org/b/id/';

const GET_BOOK_DATA = 'GET_BOOK_DATA';

const initialState = {
    docs: [],
    numFound: 0,
    isFetching: false
}

const handlers = {
    [GET_BOOK_DATA]: (state, {docs, numFound}) =>
        ({...state, docs: [...state.docs, ...docs], numFound}),
    [CHANGE_FETCHING]: (state, {isFetching}) =>
        ({...state, isFetching}),
    DEFAULT: state => state
}

export const openLibraryReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export const onBookDataGet = (docs,numFound) => ({type: GET_BOOK_DATA, docs, numFound});
export const changeFetching = (isFetching) => ({type: CHANGE_FETCHING, isFetching});

export const getBookData = (queryType, queryName, pageNumber) => async (dispatch) => {
    dispatch(changeFetching(true));
    const data = await openLibraryAPI.searchBook(queryType, queryName, pageNumber)
    const docs = data.docs.map((el) => {
        return {
            ...el,
            bookImageL: el.cover_i ? imageLink + el.cover_i + "-L.jpg" : '',
            bookImageM: el.cover_i ? imageLink + el.cover_i + "-M.jpg" : '',
            bookImageS: el.cover_i ? imageLink + el.cover_i + "-S.jpg" : ''
        }
    })
    dispatch(onBookDataGet(docs,data.numFound));
    dispatch(changeFetching(false));
}

export const onAddNewTodo = (todoName) => (dispatch) => ({type: ADD_TODO, todoName: todoName});


