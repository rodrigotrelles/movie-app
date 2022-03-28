
import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const Title = styled.h1`
   color: ${COLORS.White};
   font-size: 32px;
   font-family: "Raleway", sans-serif;
   font-weight: 500;
   text-align: center;
   margin-bottom: 24px;

   @media (min-width: 768px) {
      font-size: 50px;
   }

   @media (min-width: 1024px) {
      font-size: 72px;
   }
`

export default Title;
