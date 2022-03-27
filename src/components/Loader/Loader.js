
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../assets/resources/colors';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${COLORS.RedPrimary};
  width: 120px;
  height: 120px;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`

export default Loader;
