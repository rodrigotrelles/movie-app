
import styled from 'styled-components';

const MoviesGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
    gap: 12px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 350px;
        gap: 16px;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 450px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 500px;
    }
`

export default MoviesGrid;
