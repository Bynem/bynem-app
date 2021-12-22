import styled from 'styled-components'
import { FooterProps } from '.'

export const Footer = styled.footer`
    height: 8vh;
    background-color: #F2F2F2;
    position: absolute;
    bottom: ${({ bottom }: FooterProps) => (bottom ? '0' : null)};
    right: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: roboto, sans-serif;
    p{
        
        font-size: 1.1rem;
    }
`
