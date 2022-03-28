
import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const Title = styled.h3`
   color: ${COLORS.White};
   font-size: 24px;
   line-height: 30px;
   font-weight: 600;
   font-family: "Raleway", sans-serif;

   @media (min-width: 768px) {
      font-size: 40px;
      line-height: 72px;
   }
`

export default Title;
