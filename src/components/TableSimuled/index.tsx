import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';
import * as S from './styles';
import { Input, Space } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ColumnsType } from 'antd/lib/table';



export type DataTable = {
    descricao: string
    id: number
    linkYouTube: string
    ordemDasPerguntas: number
    titulo: string
}
export type Table = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    setBottom: Function
}


export default function TableSimuled({ setBottom }: Table) {
    const [data, setData] = useState<DataTable[] | any>()
    const [isLoading, setIsLoading] = useState(true)
    const [params, setParams] = useState("")
    const { Search } = Input;
    const columns = [
        {
            title: 'Nome',
            dataIndex: 'titulo',
            key: 'titulo',
        },
        {
            title: 'Autor',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Autor',
            dataIndex: 'author',
            key: 'author',
        },

        {
            title: '',
            dataIndex: 'id',
            key: 'id',
            width: '20%',
            render: (link:any) => (
                <>
                {console.log('link', link)}
                    <Button
                        onClick={UpdateSimuled}
                        type="primary"
                        key={link.id}
                        value={link.id}
                    >Editar
                    </Button>
                    <Button
                        onClick={(e) => DeleteSimuled(e)}
                        type="primary"
                        danger
                        key={link.id}
                        value={link.id}
                    >deletar
                    </Button>
                </>
            )
        },

    ];

    const onSearch = value => { setParams(value) };

    function DeleteSimuled(e) {
        // await axios.get('https://bynem-app.herokuapp.com/api/Simulado', {
        //     params: { filter: params }

        // })
        //     .then(function (response) {
        //         if (response.data.length === 0) {
        //             setBottom(true)
        //         } else {
        //             setBottom(false)
        //         }
        //         setData(response.data);
        //         setIsLoading(false)
        //     })
        //     .catch(function (error) {
        //         toast.error("Um erro inesperado aconteceu")
        //     });
        console.log('e', e)
    }

    function UpdateSimuled() {
        return <></>
    }

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
                    if (response.data.length === 0) {
                        setBottom(true)
                    } else {
                        setBottom(false)
                    }
                    setData(response.data);
                    setIsLoading(false)
                })
                .catch(function (error) {
                    toast.error("Um erro inesperado aconteceu")
                });
        }
        getSimuleds()
    }, [params])

    return (<>
        <S.Tools>
            <S.SearchContainer>
                <Space direction="vertical">
                    <Search placeholder="Pesquisar" onPressEnter={e => onSearchEnter(e)} onSearch={onSearch} enterButton />
                </Space>
            </S.SearchContainer>
        </S.Tools>
        <S.DivTable>
            <Table pagination={{ pageSize: 7 }} loading={isLoading} columns={columns} dataSource={data} scroll={{ y: 500 }} />
        </S.DivTable>
    </>
    )
}
