import {Field, Form, Formik} from "formik";
import {getBookData} from "../../Redux/OpenLibraryReducer";
import styles from "../All.module.css";
import {connect} from "react-redux";
import React from "react";

function SearchField(props) {
    return <div className={styles.searchBlock}>
        <Formik
            initialValues={{
                searchValue: '',
                queryValue: 'q'
            }}
            onSubmit={(values, {resetForm}) => {
                props.getBookData(values['queryValue'],values['searchValue']);
                //resetForm()
            }}
        >
            {({errors, touched, isValidating}) => (
                <Form>
                    <Field component={"select"} id="queryValue" name="queryValue" placeholder="Поиск" className={styles.queryField}>
                        <option value={"q"}>All</option>
                        <option value={"title"}>Title</option>
                        <option value={"author"}>Author</option>
                    </Field>
                    <Field id="searchValue" name="searchValue" placeholder="Поиск" className={styles.searchField}/>
                </Form>
            )}
        </Formik>
    </div>
}

const mapDispatchToProps =  {
        getBookData
}

export default connect((state)=>{}, mapDispatchToProps)(SearchField);