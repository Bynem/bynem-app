import styled from 'styled-components'

export const Container = styled.main``

export const Content = styled.main`
    display: flex !important;
    flex-direction: column !important;
    user-select: none;
    background-color: white !important;
    min-height: 855px;
`

export const Title = styled.p`
    font-size: 2.5rem;
    margin: 0 0 0 2rem;
    color: #46a6e6;
`

export const SubTitle = styled.p`
    margin: 0 0 0 2rem; 
    color: black;
`

export const ContainerVideoOrImage = styled.div`
    margin: 2rem 2rem 2rem 0;
    display: flex;

   
`

export const StepContainer = styled.div`
    position: relative;
    width: 6rem;
    right: 0;
    
    .ant-steps {
        margin-left: auto !important;
        margin-right: auto !important;
        width: fit-content;
        margin: 0;
    }



`

export const ContainerButton = styled.div`
    margin: 2rem 2rem 0 2rem;


`


export const ContainerTableQuestions = styled.div`
    margin: 2rem 2rem 0 2rem;

`
export const ConsultancyVideo = styled.div`
  
`

export const ContainerIframe = styled.div`
    margin-right: 6rem;
    display: flex;
    justify-content: center;
     > iframe {
      width: 600px;
      margin: 0 auto 0 auto;
    }
`
