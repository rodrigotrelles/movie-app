import styled from 'styled-components';
import { COLORS } from '../../../assets/resources/colors';

const StarsContainer = styled.div`
    display: flex;
    gap: 1px;

    > svg {
        cursor: pointer;
        transition: all 0.3 ease;

        &:hover {
            filter: brightness(90%);
        }
    }
`

export default StarsContainer;
