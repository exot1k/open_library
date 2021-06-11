import React, {useState} from 'react';
import BookTable from "./components/BookTable/BookTable";
import {Route} from "react-router-dom";




function App() {
    const [isOpen, setOpen] = useState(false);
    return (<BookTable/>);
}

export default App;
