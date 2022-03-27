
import styled from 'styled-components';
import PrimaryButton from '../../Buttons/PrimaryButton';

const PaginatorButton = styled(PrimaryButton)`
    position: relative;

    > svg {
        position: absolute;
        top: 50%;
        left: ${props => props.left ? '10%' : '90%'};
        transform: translate(-50%, -50%);
    }
`

export default PaginatorButton;
