
import styled from 'styled-components';

const Carrousel = styled.section`
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(5, 396px);
    grid-template-rows: repeat(1, 608px);
    gap: 16px;
    padding-bottom: 15px;
    width: 100%;
    height: 100%;
`

export default Carrousel;
