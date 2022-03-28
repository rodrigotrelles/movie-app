
import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const Title = styled.h2`
    font-size: 32px;
    line-height: 40px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: ${COLORS.White};
    margin: 24px 0;

    @media (min-width: 768px) {
        font-size: 64px;
        line-height: 116px;
    }
`

export default Title;
