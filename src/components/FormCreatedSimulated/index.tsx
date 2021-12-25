import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Radio, Space, Divider } from 'antd';
import * as S from './styles'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

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

export type FormCreatedSimuled = {
    author: string
    descricao: string
    linkYouTube: string
    titulo: string
    ordemDasPerguntas: number
}

export default function FormCreatedSimulated() {
    const antIcon = <LoadingOutlined style={{ fontSize: 34, color: "#E414B2" }} spin />
    const [ordemDasPerguntas, setOrdemDasPerguntas] = useState({ ordemDasPerguntas: 1 })
    const [isSpinning, setIsSpinning] = useState(false)
    const router = useRouter()
    const FakeUser = {
        author: 'Usuario'
    }
    const [formSimuled, setFormSimuled] = useState<FormCreatedSimuled>({
        author: FakeUser.author,
        descricao: "",
        linkYouTube: "",
        titulo: "",
        ordemDasPerguntas: 1
    })

    const onFinish = (values) => {
        setIsSpinning(true)
        const newObject = Object.assign(ordemDasPerguntas, values)
        setFormSimuled(newObject)
        postSimuled(newObject)
    };

    function orderQuestions(e) {
        setOrdemDasPerguntas({ ...ordemDasPerguntas, ordemDasPerguntas: e.target.value })
    }

    async function postSimuled(newObject) {

        await axios.post('http://localhost:5000/api/Simulado', newObject, {


        }).then(function (response) {
            router.push('/')
            toast.success('Simulado salvo com sucesso ')
        })
            .catch(function (error) {
                setIsSpinning(false)
                toast.error(error)
            });
    }

    function goTohome() {
        router.push("/")
    }

    return (
        <Spin indicator={antIcon} spinning={isSpinning}>
            <Form {...layout} name="nest-messages" labelAlign={"left"} onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='titulo'
                    label="Título"
                    rules={[
                        {
                            required: true,
                            message: 'Insira seu titulo',
                        },
                    ]}
                >
                    <Input placeholder="Insira seu título" />
                </Form.Item>
                <Form.Item
                    name='descricao'
                    label="Descriação"
                    rules={[
                        {
                            required: true,
                            message: 'Insira sua descriação',
                        },
                    ]}
                >
                    <Input.TextArea placeholder="Insira sua descriação" />
                </Form.Item>

                <Form.Item
                    name='linkYoutube'
                    label="Youtube Link"

                >
                    <Input addonBefore="youtube.com/" defaultValue="mysite" />
                </Form.Item>
                <S.SubTitle>Ordem das perguntas</S.SubTitle>
                <Radio.Group name="radiogroup" defaultValue={1} onChange={(e) => orderQuestions(e)}>
                    <Space direction="vertical">
                        <Radio value={1}>Sequencial</Radio>
                        <Radio value={2}>Aleatória</Radio>
                    </Space>
                </Radio.Group>
                <Divider style={{ borderTop: "2px solid rgba(0, 0, 0, 0.06)" }} />
                <Form.Item>
                    <S.ContainerButton>
                        <Button type="primary" danger onClick={goTohome} htmlType="submit">
                            VOLTAR
                        </Button>
                        <Button type="primary" htmlType="submit">
                            SALVAR
                        </Button>
                    </S.ContainerButton>
                </Form.Item>
                <br />
            </Form>
        </Spin>
    );
}
