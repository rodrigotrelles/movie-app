import styled from 'styled-components';
import PrimaryButton from '../../Buttons/PrimaryButton';

const WatchNowButton = styled(PrimaryButton)`
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    transform-origin: center center;
    transform: translate(-50%, -50%) scale(0);
    max-width: 60%;
`

export default WatchNowButton;
