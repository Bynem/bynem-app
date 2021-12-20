import styled from 'styled-components'

export const Content = styled.div``

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
    margin-top: 10vh;
    margin-bottom: 5vh;
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
    padding: 1rem 2rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        opacity: 0.7;
    }
`
export const divInput = styled.div`
    margin: 0 2rem 0 0 ; 
     @media (max-width: 400px){
        margin: 0;

    }
`

export const Input = styled.input`
    margin-left: 0;
`
