import styled from 'styled-components'
import { FooterProps } from '.'

export const Footer = styled.footer`
    height: 11vh;
    background-color: #F5F5F5;
    justify-content: center;
    position: absolute;
    bottom: ${({ bottom }: FooterProps) => (bottom ? '0' : null)};
    left: 0;
    right: 0;
    align-items: center;
    display: flex;
    `
