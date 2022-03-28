
import styled from 'styled-components';

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin: 36px 0;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export default RatingContainer;
