import React, { useState } from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import Divider from '@mui/material/Divider';
import Table, { GridRowsProp } from '../../components/Table'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export default function Home() {
    const [simulados, setSimulados] = useState<GridRowsProp[]>([] as GridRowsProp[]);
    
    async function getSimulados() {
        await axios.get('http://localhost:5000/api/Simulado', {
             params: { filter: "teste" } //altera aqui para o filtro do input e passar os dados para table
        })
            .then(function (response) {
                setSimulados(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

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
                        <a href="#"><SearchIcon onClick={() => getSimulados()}/></a>
                    </S.SearchContainer>
                </S.Tools>
                <Divider />
                <Table />
            </S.Content>
            <Footer bottom={true} />
        </>
    )
}
