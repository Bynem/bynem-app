import styled from 'styled-components'

export const Footer = styled.footer`
    position: absolute;
    margin-top: 20px;
    /* width: 100vw; */
    bottom: ${({ bottom }) => (bottom ? '0' : null)};
    
    right: 0px;
    left: 0px;
`
