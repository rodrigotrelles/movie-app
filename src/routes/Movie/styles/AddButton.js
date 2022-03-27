
import styled from 'styled-components';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const AddButton = styled(PrimaryButton)`
    position: relative;
    width: 196px;
    font-size: 24px;
    line-height: 48px;
    font-weight: 500;
    height: 49px;

    > svg {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(-50%, -50%);
    }
`

export default AddButton;
