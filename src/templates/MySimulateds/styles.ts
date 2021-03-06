import styled from 'styled-components'

export const Container = styled.main``

export const Content = styled.div`
    display: flex !important;
    flex-direction: column !important;
    user-select: none;
    background-color: white !important;
`

export const Title = styled.p`
    font-size: 3rem;
    margin: 0 0 0 2rem;
    color: #46a6e6;
`

export const SubTitle = styled.p`
    margin: 0 0 0 2rem; 
    color: black;
`


export const divInput = styled.div`
    margin: 0 2rem 0 auto ; 
    max-height: 40px;
   
`

export const Input = styled.input`
    margin: 0 auto;
    width: 12rem;
    height: 20px;
    font-size: 1rem;
    border: 1px solid #D0CFCE;
    outline: none;
    &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;
    &::-webkit-input-placeholder{
        transition: opacity 0.45s ease; 
        opacity: 0;
        }
    &::-moz-placeholder {
        transition: opacity 0.45s ease; 
        opacity: 0;
        }
    &:-ms-placeholder {
        transition: opacity 0.45s ease; 
        opacity: 0;
        }    
    }
    
`

export const InputButton = styled.button`
    max-height: 40px;
`
