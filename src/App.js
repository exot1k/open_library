import React, {useState} from 'react';
import SearchField from "./components/SerachField/SearchField";
import BookTable from "./components/BookTable/BookTable";
import Dialog from "./components/BookTable/DetailDialog/DetailDialog";


function App() {
    const [isOpen, setOpen] = useState(false);
    return (<div>
            <SearchField/>
            <BookTable/>
            <button onClick={(e) => setOpen(true)}>Open Dialog</button>
            <Dialog isOpen={isOpen} onClose={(e) => setOpen(false)}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste a ipsam repellendus commodi ad, fugit id
                magnam inventore laudantium autem delectus praesentium incidunt debitis, numquam dicta eveniet
                obcaecati, itaque quidem?
            </Dialog>
        </div>
    );
}

export default App;
