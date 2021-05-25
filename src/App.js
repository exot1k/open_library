import React, {useState} from 'react';
import SearchField from "./components/SerachField/SearchField";
import BookTable from "./components/BookTable/BookTable";
import Detail from "./components/DetailPopup/DetailPopup";




function App() {
    const [isOpen, setOpen] = useState(false);
    return (<div>
            <SearchField/>
            <BookTable/>
           <button onClick={(e) => setOpen(true)}>Open Dialog</button>
              <Detail isOpen={isOpen} onClose={(e) => setOpen(false)} title='Заголовок'
                      content={<p>Что-то важное</p>} >
                test
            </Detail>
        </div>
    );
}

export default App;
