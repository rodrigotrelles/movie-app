import styled from 'styled-components';
import { COLORS } from '../../assets/resources/colors';

const PrimaryButton = styled.button`
    border: none;
    background-color: ${COLORS.RedPrimary};
    border-radius: 40px;
    box-shadow: 0 16px 16px 4px rgba(0, 0, 0, 0.12);
    color: white;
    font-size: 16px;
    line-height: 20px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    width: 288px;
    height: 56px;
    cursor: pointer;

    &:hover { 
        background-color: ${COLORS.RedPrimaryDark};
    }

    @media (min-width: 600px) {
        font-size: 18px;
        line-height: 24px;
    }
`

export default PrimaryButton;
