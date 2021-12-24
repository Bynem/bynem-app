import React, { useState } from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import Table from '../../components/TableSimuled'

export default function MySimuleds() {
    const [bottom, setBottom] = useState(false)

    return (
        <>
            <Head home={true} />
            <S.Content>
                <S.Title>Meus simulados</S.Title>
                <S.SubTitle>Edite ou exclua seus simulados</S.SubTitle>
                <Table setBottom={setBottom} />
            </S.Content>
            <Footer bottom={bottom} />
        </>
    )
}
