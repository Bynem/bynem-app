import styled from 'styled-components'

export const Container = styled.main``

export const Content = styled.main`
    display: flex !important;
    flex-direction: column !important;
    user-select: none;
    background-color: white !important;
    min-height: 855px;
    width: 100%;
    margin-bottom: 50px;
`
export const ContainerCount = styled.div`
    margin: 0 2rem 0 2rem; 
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ContainerCountQuestions = styled.div`
    p{
        margin: 0;
    }
`

export const ContainerCountTimer = styled.div`
`


export const Title = styled.div`
    font-size: 2.5rem;
    margin: 0 0 0 2rem;
    color: #46a6e6;
    word-wrap: break-word;

`

export const SubTitle = styled.p`
    margin: 0 0 0 2rem; 
    color: black;
`

export const ContainerVideoOrImage = styled.main`
    margin: 2rem 6rem 2rem 0rem;
    display: flex;
 @media (max-width: 768px) {
            margin: 0

    }

   
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

    @media (max-width: 768px) {
        display: none;
    }

`

export const ContainerTableQuestions = styled.div`
    margin: 2rem 2rem 0 2rem;

`
export const ConsultancyVideo = styled.div`
  
`

export const ContainerIframe = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
     > iframe {
      width: 600px;
      margin: 0 auto 0 auto;
    }


`
export const ContainerSubTitle = styled.div`
    font-size: 1rem;
    margin: 24px 0 0 2rem;
    color: #46a6e6;
    word-wrap: break-word;
    p{

    }
`
export const ContainerOptions = styled.div`

`
export const CheckContainer = styled.div`
    margin: 0 0 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const DivCheckBox = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0 0 0;


    >input{
        width: 16px;
        height: 16px;
    }
`

export const ContainerDescription = styled.div`
    margin: 1rem 1rem 0 1rem;
    border: none;
    width: 100%;
    word-wrap: break-word;

    p{
        margin: 0
    }
`
export const ContainerButton = styled.div`
    width: fit-content;
    margin-right: auto;
     .ant-btn{
        margin: 2px;
        border-radius: 4px;
    }
    .labelYoutube{
        padding: 0 21px 0 22px;
    }
`