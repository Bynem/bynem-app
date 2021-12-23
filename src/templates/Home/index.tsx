import React from 'react';
import Head from "../../components/Head"
import Footer from "../../components/Footer"
import * as S from './styles'
import axios from 'axios';
import { Divider, Input, Space } from 'antd';
import Table from '../../components/Table'

export default function Home() {
    const { Search } = Input;
    async function getSimulados() {
        await axios.get('http://localhost:5000/api/Simulado', {
            params: { filter: "teste" } //altera aqui para o filtro do input e passar os dados para table
        })
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    const onSearch = value => console.log(value);
    return (
        <div>
            <S.Container>
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
                            <Space direction="vertical">
                                <Search placeholder="Pesquisar" onSearch={onSearch} enterButton />
                            </Space>
                        </S.SearchContainer>
                    </S.Tools>
                    <Table />
                </S.Content>
            </S.Container>
            <Footer />
        </div>
    )
}
