
import styled from 'styled-components';
import img from '../../images/header.png';

const Header = styled.header`
    width: 100%;
    height: 388px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)), url(${img});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export default Header;
