import styled from 'styled-components'
import { FooterProps } from '.'

export const Footer = styled.footer`
    height: 10vh;
    width: 100vw;
    background-color: #F2F2F2;
    position: absolute;
    bottom: ${({ bottom }: FooterProps) => (bottom ? '0' : null)};
    right: 0px;
    left: 0px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Benzin ExtraBold;
    p{
        
        font-size: 1rem;
    }
`
