// hooks
import { useState } from 'react';

// components
import Header from '../components/Header';
import Movies from '../components/Movies';

function App() {
  const [searchValue, setSearchValue] = useState();

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Movies searchValue={searchValue} />
    </div>
  );
}

export default App;
