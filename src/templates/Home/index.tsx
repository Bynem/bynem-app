import React from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Table from '../../components/Table'

export default function Home() {
    return (
        <>
            <Head />
            <S.Content>
                <S.Title>Simulados</S.Title>
                <S.SubTitle>Estude utilizando o sistema de simulados totalmente grátis</S.SubTitle>
                <S.Tools>
                    <S.divButton>
                        <Button variant="contained" color="success">
                            Criar Simulado
                        </Button>
                    </S.divButton>
                    <S.divInput>
                        <S.Input placeholder="Pesquisar"
                        ></S.Input>
                    </S.divInput>
                </S.Tools>
                <Divider />
                <Table />
            </S.Content>
            <Footer bottom={true} />
        </>
    )
}
