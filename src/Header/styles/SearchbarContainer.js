import styled from 'styled-components';
import { COLORS } from '../../assets/resources/colors';

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
        left: 40px;
        top: 50%;
        transform: translateY(-50%); 
        width: 26px;
        height: 26px;
    }

    > input:placeholder-shown + svg {
        color: ${COLORS.Gray};
    }

`

export default SearchbarContainer;
