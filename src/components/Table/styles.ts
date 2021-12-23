import styled from "styled-components";

export const Tools = styled.div`
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 3vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
export const SearchContainer = styled.form`
    display: flex;
    margin: 0 2rem 0 0;
    
    svg{
        width: 30px;
    }
`

export const DivTable = styled.div`

    margin: 0 2rem 0 2rem;
`