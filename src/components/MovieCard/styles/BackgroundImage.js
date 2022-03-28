
import styled from 'styled-components';

const BackgroundImage = styled.div`
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)), url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    z-index: -1;

    &:after {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        display: block;
        content: "";
        background-color: rgba(0,0,0,0);
        width: 100%;
        height: 100%;
    }
`

export default BackgroundImage;
