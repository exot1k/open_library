import {Field, Form, Formik} from "formik";
import {getBookData} from "../../Redux/OpenLibraryReducer";
import styles from "../All.module.css";
import {connect} from "react-redux";
import React, {useState} from "react";

function SearchFieldTest(props) {
    function onChangeSearchField(e, handleChange, handleSubmit) {
        handleChange(e)
    }

    return <div className={styles.searchBlock}>
        <Formik
            initialValues={{
                searchValue: '',
                queryValue: 'q'
            }}
            onSubmit={(values, {resetForm}) => {
                debugger
                props.getBookData(values['queryValue'], values['searchValue']);
                //resetForm()
            }}>
            {({handleSubmit, handleChange}) => (
                <Form>
                    <Field component={"select"} id="queryValue" name="queryValue" placeholder="Поиск"
                           className={styles.queryField}>
                        <option value={"q"}>All</option>
                        <option value={"title"}>Title</option>
                        <option value={"author"}>Author</option>
                    </Field>
                    <Field id="searchValue" name="searchValue" placeholder="Поиск" className={styles.searchField}
                           onChange={e => {
                               onChangeSearchField(e, handleChange, handleSubmit)
                           }}/>
                </Form>
            )}
        </Formik>
    </div>
}

const mapDispatchToProps = {
    getBookData
}

export default connect((state) => {
}, mapDispatchToProps)(SearchFieldTest);