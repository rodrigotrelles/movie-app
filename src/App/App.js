// hooks
import { useEffect, useRef } from 'react';

// router
import { Link } from "react-router-dom";

// icons
import { ReactComponent as SearchIcon } from '../icons/search.svg';

// styles
import Header from './styles/Header';
import Title from './styles/Title';
import Searchbar from './styles/Searchbar';
import SearchbarContainer from './styles/SearchbarContainer';

function App() {

  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, [])

  return (
    <div className="App">

      <Header>
        <Title>Clockwork Movie App</Title>
        <SearchbarContainer>
          <Searchbar type="text" ref={inputElement} placeholder="Search movies..." />
          <SearchIcon />
        </SearchbarContainer>
      </Header>

    </div>
  );
}

export default App;
