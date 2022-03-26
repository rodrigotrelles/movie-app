import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const SearchbarContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 58px;
    padding: 0 24px;
    position: relative;


    > svg {
        color: black;
        transition: 0.3s cubic-bezier(.25,.8,.25,1) all;
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%); 
        width: 26px;
        height: 26px;
    }

    > input:placeholder-shown + svg {
        color: ${COLORS.GrayLight};
    }

`

export default SearchbarContainer;
