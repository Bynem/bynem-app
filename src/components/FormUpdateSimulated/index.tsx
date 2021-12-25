import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Radio, Space, Divider } from 'antd';
import * as S from './styles'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { Id } from '../../templates/UpdateSimulated';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export type FormCreatedSimulated = {
    author: string
    descricao: string
    linkYouTube: string
    titulo: string
    ordemDasPerguntas: number
}

export type Simulated = {
    data: FormCreatedSimulated
}

export default function FormUpdateSimulated({ id }: Id) {
    const [simulated, setSimulated] = useState<FormCreatedSimulated>()
    const antIcon = <LoadingOutlined style={{ fontSize: 34, color: "#E414B2" }} spin />
    const [ordemDasPerguntas, setOrdemDasPerguntas] = useState({ ordemDasPerguntas: 1 })
    const [isSpinning, setIsSpinning] = useState(false)
    const router = useRouter()

    const onFinish = (values) => {
        setIsSpinning(true)
        const newObject = Object.assign(ordemDasPerguntas, values)
        postSimuled(newObject)
    };

    function orderQuestions(e) {
        setOrdemDasPerguntas({ ...ordemDasPerguntas, ordemDasPerguntas: e.target.value })
    }

    useEffect(() => {
        async function getSimuledById() {
            await axios.get(`https://bynem-app.herokuapp.com/api/Simulado/${id}`).then(function (response) {
                setSimulated(response.data)
            })
                .catch(function (error) {
                    toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
                });
        }
        getSimuledById()
    }, [])

    async function postSimuled(newObject) {
        if (newObject.titulo != undefined || newObject.descricao != undefined || newObject.linkYoutube != undefined) {
            const idSimulated = { id: id }
            const dataRequest = Object.assign(newObject, idSimulated)
            await axios.put('https://bynem-app.herokuapp.com/api/Simulado', dataRequest)
                .then().catch(function (error) {
                    setIsSpinning(false)
                    toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
                });
        }

        goToMySimuleds()
        toast.success('Simulado salvo com sucesso ')
        setIsSpinning(false)
    }

    function goToMySimuleds() {
        router.push("/meus-simulados")
    }

    return (
        <Spin indicator={antIcon} spinning={isSpinning}>
            {simulated && <Form
                {...layout}
                name="nest-messages"
                labelAlign={"left"}
                onFinish={onFinish}
                initialValues={{
                    titulo: simulated?.titulo,
                    descricao: simulated?.descricao,
                    linkYoutube: simulated?.linkYouTube
                }}
                validateMessages={validateMessages}>
                <Form.Item
                    name='titulo'
                    label="Título"
                    rules={[
                        {
                            message: 'Insira seu titulo',
                        },
                    ]}
                >
                    <Input placeholder="Insira seu título" />
                </Form.Item>
                <Form.Item
                    name='descricao'
                    label="Descriação"
                >
                    <Input.TextArea placeholder="Insira sua descriação" />
                </Form.Item>

                <Form.Item
                    name='linkYoutube'
                    label="Youtube Link"
                >
                    <Input addonBefore="youtube.com/" />
                </Form.Item>
                <S.SubTitle>Ordem das perguntas</S.SubTitle>
                <Radio.Group name="radiogroup" defaultValue={simulated?.ordemDasPerguntas} onChange={(e) => orderQuestions(e)}>
                    <Space direction="vertical">
                        <Radio value={1}>Sequencial</Radio>
                        <Radio value={2}>Aleatória</Radio>
                    </Space>
                </Radio.Group>
                <Divider style={{ borderTop: "2px solid rgba(0, 0, 0, 0.06)" }} />
                <Form.Item>
                    <S.ContainerButton>
                        <Button type="primary" danger onClick={goToMySimuleds} htmlType="submit">
                            VOLTAR
                        </Button>
                        <Button type="primary" htmlType="submit">
                            SALVAR
                        </Button>
                    </S.ContainerButton>
                </Form.Item>
                <br />
            </Form>}
        </Spin>
    );
}
