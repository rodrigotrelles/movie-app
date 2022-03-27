
import styled from 'styled-components';

const BackgroundImage = styled.div`
    background-image: linear-gradient(to bottom, rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.8)), url(${props => props.background});
    background-repeat: repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export default BackgroundImage;
