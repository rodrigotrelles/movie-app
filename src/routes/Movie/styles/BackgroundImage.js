
import styled from 'styled-components';

const BackgroundImage = styled.div`
    background-image: linear-gradient(to bottom, rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.8)), url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export default BackgroundImage;
