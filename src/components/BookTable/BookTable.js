import React, {useState} from 'react';
import SearchField from "../SerachField/SearchField";
import BookList from "../BookList/BookList";


function BookTable() {

    return (<div>
            <SearchField/>
            <BookList/>


        </div>
    );
}

export default BookTable;
