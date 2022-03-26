import styled from 'styled-components';

const Searchbar = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 89px;
    color: black;
    font-size: 24px;
    font-weight: medium;
    padding: 6px 24px 6px 60px;
    transition: 0.3s ease color;

    &::placeholder {
        color: #BBBBBB;
    }

    &:focus {
       outline-offset: 1px;
       outline: 2px solid black;
    }
`

export default Searchbar;
