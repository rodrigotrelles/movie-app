
import styled from 'styled-components';
import PrimaryButton from '../../Buttons/PrimaryButton';

const PaginatorButton = styled(PrimaryButton)`
    position: relative;

    > svg {
        position: absolute;
        top: 50%;
        left: ${props => props.left ? '15%' : '85%'};
        transform: translate(-50%, -50%);

        @media (min-width: 600px) {
            left: ${props => props.left ? '10%' : '90%'};
        }
    }
`

export default PaginatorButton;
