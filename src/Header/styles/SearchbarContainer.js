import styled from 'styled-components';

const SearchbarContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 58px;
    padding: 0 24px;
    position: relative;


    > svg {
        color: black;
        transition: 0.3s ease all;
        position: absolute;
        left: 36px;
        top: 50%;
        transform: translateY(-50%);
    }

    > input:placeholder-shown + svg {
        color: #C4C4C4;
    }

`

export default SearchbarContainer;
