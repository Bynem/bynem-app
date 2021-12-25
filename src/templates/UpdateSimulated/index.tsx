import React from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import FormUpdateSimulated from '../../components/FormUpdateSimulated'
import { Divider } from 'antd';

export default function UpdateSimulated(data) {

    return (
        <>
            <Head home={true} />
            <S.Content>
                <S.Title>Crie seu simulado</S.Title>
                <Divider />
                <S.FormContainer>
                    {console.log("data no body ", data.data)}

                    <FormUpdateSimulated data={data.data} />
                </S.FormContainer>
            </S.Content>
            <Footer bottom={false} />
        </>
    )
}
