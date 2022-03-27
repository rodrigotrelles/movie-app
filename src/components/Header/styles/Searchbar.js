import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const Searchbar = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 89px;
    color: black;
    font-size: 24px;
    font-weight: medium;
    font-family: "Raleway", sans-serif;
    padding: 6px 24px 6px 54px;
    transition: 0.3s cubic-bezier(.25,.8,.25,1) color;

    &::placeholder {
        color: ${COLORS.Gray};
    }

    &:focus {
       outline-offset: 1px;
       outline: 2px solid ${COLORS.RedPrimary};
    }
`

export default Searchbar;
