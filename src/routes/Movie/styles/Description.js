
import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const Description = styled.p`
    font-size: 18px;
    line-height: 24px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: ${COLORS.White};

    @media (min-width: 768px) {
        font-size: 36px;
        line-height: 51px;
    }
`

export default Description;
