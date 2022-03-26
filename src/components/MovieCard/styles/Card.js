
import styled from 'styled-components';

// router
import { Link } from "react-router-dom";

const Card = styled(Link)`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)), url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    font-size: 40px;
    gap: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-decoration: none;


    &:first-child, &:last-child { 
        grid-column: auto / span 2;
        aspect-ratio: 2 / 4;
    }

    &:nth-child(6) {
        grid-column: 2 / 5;
        grid-row: 2 / 4;
    } 
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

export default Card;
