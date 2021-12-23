import styled from 'styled-components'

export const Container = styled.main`
    /* height: 100%; */
`

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
    /* font-size: 3rem;*/
    margin: 0 0 0 2rem; 
    color: black;
`

export const Tools = styled.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 3vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #f5f5f5; */
    
`
export const divButton = styled.div`
    margin: 0 0 0 2rem;
     @media (max-width: 400px){
        margin: 0;

    }
`

export const Button = styled.button`
    border: none;
    background-color: #70e000;
    border-radius: 6px;
    padding: 0.5rem 2rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        opacity: 0.7;
    }
`
export const divInput = styled.div`
    margin: 0 2rem 0 0 ; 
    max-height: 40px;
     @media (max-width: 400px){
        margin: 0;

    }
`

export const SearchContainer = styled.form`
    display: flex;
    margin: 0 2rem 0 0;
    
    svg{
        width: 30px;
    }
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
