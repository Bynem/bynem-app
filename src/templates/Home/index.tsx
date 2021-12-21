import React from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import Divider from '@mui/material/Divider';
import Table from '../../components/Table'
// import Table from '../../components/TableA';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <Head />
            <S.Content>
                <S.Title>Simulados</S.Title>
                <S.SubTitle>Estude utilizando o sistema de simulados totalmente grátis</S.SubTitle>
                <S.Tools>
                    <S.divButton>
                        <S.Button >
                            Criar Simulado
                        </S.Button >
                    </S.divButton>
                    <S.SearchContainer>
                        <S.Input type="text" id="search-bar" placeholder="Pesquisar" />
                        <a href="#"><SearchIcon /></a>
                    </S.SearchContainer>
                </S.Tools>
                <Divider />
                <Table />
            </S.Content>
            <Footer bottom={true} />
        </>
    )
}
