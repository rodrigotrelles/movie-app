import styled from 'styled-components';
import { COLORS } from '../../assets/resources/colors';

const Searchbar = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 89px;
    color: black;
    font-size: 24px;
    font-weight: medium;
    padding: 6px 24px 6px 54px;
    transition: 0.3s ease color;

    &::placeholder {
        color: ${COLORS.GrayLight};
    }

    &:focus {
       outline-offset: 1px;
       outline: 2px solid ${COLORS.RedPrimary};
    }
`

export default Searchbar;
