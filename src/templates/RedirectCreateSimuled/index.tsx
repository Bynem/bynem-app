import React from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import FormCreatedSimuled from '../../components/FormCreatedSimuled'
import { Divider } from 'antd';

export default function RedirectCreateSimuled() {

    return (
        <>
            <Head />
            <S.Content>
                <S.Title>Crie seu simulado</S.Title>
                <Divider />
                <S.FormContainer>
                    <FormCreatedSimuled />
                </S.FormContainer>
            </S.Content>
            <Footer bottom={false} />
        </>
    )
}
