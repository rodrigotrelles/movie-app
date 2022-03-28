import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const Genre = styled.div`
    display: flex;
    background-color: rgba(29, 29, 29, 0.5);
    color: ${COLORS.Cyan};
    font-size: 12px;
    line-height: 15px;
    padding: 8px 12px;
    border-radius: 0 8px;

    @media (min-width: 600px) {
      font-size: 14px;
      padding: 12px 16px;   
      line-height: 16px;
    }
`

export default Genre;
