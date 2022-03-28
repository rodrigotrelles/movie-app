import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

// router
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${COLORS.White};
    text-decoration: none;
    font-size: 28px;
    line-height: 32px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        filter: brightness(0.8);
    }

    @media (min-width: 768px) {
        font-size: 40px;
        line-height: 48px;
    }
`

export default BackButton;
