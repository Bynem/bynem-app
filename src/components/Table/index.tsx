import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import * as S from './styles';
import { Input, Space } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';

const columns = [
    {
        title: 'Descrição',
        dataIndex: 'descricao',
        key: 'descricao',
    },
    {
        title: 'Título',
        dataIndex: 'titulo',
        key: 'titulo',
    },

    {
        title: 'LinkYouTube',
        dataIndex: 'linkYouTube',
        key: 'linkYouTube',
        render: (link) => <a href={link.linkYouTube}>Simular</a>,
    },
];

export type DataTable = {
    descricao: string
    id: number
    linkYouTube: string
    ordemDasPerguntas: number
    titulo: string
}

export default function TableAnt() {
    const [data, setData] = useState<DataTable[] | any>()
    const [isLoading, setIsLoading] = useState(true)
    const [params, setParams] = useState("")
    const { Search } = Input;

    const onSearch = value => { setParams(value) };

    function onSearchEnter(e) {
        e.preventDefault();
        setIsLoading(true)
        setParams(e.target.value)
    }

    useEffect(() => {
        async function getSimuleds() {
            await axios.get('https://bynem-app.herokuapp.com/api/Simulado', {
                params: { filter: params }

            })
                .then(function (response) {
                    console.log("response", response)
                    setData(response.data);
                    setIsLoading(false)
                })
                .catch(function (error) {
                    toast.error("Um erro inesperado aconteceu")
                    console.log(error);
                });
        }
        getSimuleds()
    }, [params])

    return (<>
        <S.Tools>
            <S.divButton>
                <S.Button >
                    Criar Simulado
                </S.Button >
            </S.divButton>
            <S.SearchContainer>
                <Space direction="vertical">
                    <Search placeholder="Pesquisar" onPressEnter={e => onSearchEnter(e)} onSearch={onSearch} enterButton />
                </Space>
            </S.SearchContainer>
        </S.Tools>
        <S.DivTable>
            <Table pagination={{ pageSize: 8 }} loading={isLoading} columns={columns} dataSource={data} />
        </S.DivTable>
    </>
    )
}
