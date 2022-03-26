
import styled from 'styled-components';

// router
import { Link } from "react-router-dom";

const Card = styled(Link)`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)), url(${props => props.srcImg});

    background-color: blue;
    font-size: 40px;
    transition: all 0.3s ease;

    &:first-child, &:last-child { 
        grid-column: auto / span 2;
    }

    &:nth-child(6) {
        grid-column: 2 / 5;
        grid-row: 2 / 4;
    }
    
    &:hover {
        transform: scale(1.01);
    }
`

export default Card;
