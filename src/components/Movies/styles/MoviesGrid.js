
import styled from 'styled-components';

const MoviesGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 600px);
    gap: 16px;
`

export default MoviesGrid;
