// hooks
import { useState, useEffect, useRef } from 'react';

// router
import { Link } from "react-router-dom";

// components
import Header from '../Header';

function App() {

  const [searchValue, setSearchValue] = useState();


  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      {searchValue}
    </div>
  );
}

export default App;
