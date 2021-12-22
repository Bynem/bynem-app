import styled from 'styled-components'
import { FooterProps } from '.'

export const Footer = styled.footer`
    height: 5vh;
    background-color: #F2F2F2;
    position: absolute;
    right: 0;
    left: 0;
    bottom: ${({ bottom }: FooterProps) => (bottom ? '0' : null)};
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Benzin ExtraBold;
    p{
        
        font-size: 1rem;
    }
`
