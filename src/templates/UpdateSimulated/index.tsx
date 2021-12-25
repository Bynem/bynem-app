import React from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import FormUpdateSimulated from '../../components/FormUpdateSimulated'
import { Divider } from 'antd';

export default function UpdateSimulated(id) {

    return (
        <>
            <Head home={true} />
            <S.Content>
                <S.Title>Altere seu simulado</S.Title>
                <Divider />
                <S.FormContainer>
                    {console.log("id no body ", id)}

                    <FormUpdateSimulated data={id} />
                </S.FormContainer>
            </S.Content>
            <Footer bottom={false} />
        </>
    )
}
