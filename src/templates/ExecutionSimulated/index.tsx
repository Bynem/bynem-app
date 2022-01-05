import React, { useEffect, useState } from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import { Divider, Steps } from 'antd';
import { Input } from 'antd';
import StepComponent from '../../components/StepSimulated';

export type Uuid = {
    uuid: string | string[];
}
const { Step } = Steps;

export default function ExecutionSimulated() {
    const { TextArea } = Input

    const [current, setCurrent] = useState(0)

    function stepChange(e) {
        setCurrent(e)
    }

    return <>
        <>
            <Head home={true} />
            <S.Content>
                <S.Title></S.Title>
                <Divider />
                <S.ContainerVideoOrImage>
                    {/* {simulated.linkYouTube && */}
                    <S.StepContainer>
                        <Steps size="small" status='process' className="KKKKKKKKK" current={current} onChange={e => stepChange(e)} direction="vertical">
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                            <Step />
                        </Steps>
                    </S.StepContainer>
                    <S.ContainerIframe>
                        <iframe
                            height="315"
                            src="https://www.youtube.com/embed/1_h1D7GPwSw"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </S.ContainerIframe>
                    {/* } */}
                </S.ContainerVideoOrImage>

                <Divider />
            </S.Content>
            <Footer bottom={false} />
        </>
    </>
}
