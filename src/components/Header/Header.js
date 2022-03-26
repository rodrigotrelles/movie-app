// hooks
import { useEffect, useRef } from 'react';

// icons
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

// styles
import HeaderContainer from './styles/HeaderContainer';
import Title from './styles/Title';
import Searchbar from './styles/Searchbar';
import SearchbarContainer from './styles/SearchbarContainer';

const Header = ({ searchValue, setSearchValue }) => {
    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    }, [])

    return (
        <HeaderContainer srcImg={process.env.PUBLIC_URL + '/header.png'}>
            <Title>Clockwork Movie App</Title>
            <SearchbarContainer>
                <Searchbar type="text" ref={inputElement} placeholder="Search movies..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <SearchIcon />
            </SearchbarContainer>
        </HeaderContainer>
    );
}

export default Header;