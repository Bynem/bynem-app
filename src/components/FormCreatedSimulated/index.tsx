import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Radio, Space, Divider, Upload, InputNumber, Switch, TimePicker } from 'antd';
import * as S from './styles'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { UploadOutlined } from '@ant-design/icons'
import moment from 'moment';

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
    linkYouTube?: string
    thumbnail?: string
    titulo: string
    ordemDasPerguntas: number
    aleatoria?: number
    sequencial?: number
    tempo: boolean
    tempoPorProva: string
    tempoPorPergunta: string
}


export default function FormCreatedSimulated() {
    const antIcon = <LoadingOutlined style={{ fontSize: 34, color: "#E414B2" }} spin />
    const [ordemDasPerguntas, setOrdemDasPerguntas] = useState({ ordemDasPerguntas: 0 })
    const [isSpinning, setIsSpinning] = useState<boolean>(false)
    const [timeSimulated, setTimeSimulated] = useState<boolean>(false)
    const [youtubeOrThumbnailSelected, setYoutubeOrThumbnailSelected] = useState("")
    const [OrderQuestionsSelected, setOrderQuestionsSelected] = useState<number>(0)
    const [hoursMultipled, setHoursMultipled] = useState<string | null>(null)

    const router = useRouter()
    // const FakeUser = {
    //     author: 'Usuario'
    // }
    // const [formSimuled, setFormSimuled] = useState<FormCreatedSimuled>({
    //     author: FakeUser.author,
    //     descricao: "",
    //     linkYouTube: "",
    //     titulo: "",
    //     ordemDasPerguntas: 1
    // })

    function goTohome() {
        router.push("/")
    }

    const onFinish = (values) => {
        console.log("newObject", values)
        setIsSpinning(true)
        const newObject = Object.assign(ordemDasPerguntas, values)
        console.log("newObject", newObject)
        // setFormSimuled(newObject)
        // postSimuled(newObject)
    };

    function orderQuestions(e) {
        setOrderQuestionsSelected(e.target.value)
        setOrdemDasPerguntas({ ...ordemDasPerguntas, ordemDasPerguntas: e.target.value })
    }

    async function postSimuled(newObject) {

        await axios.post('https://bynem-app.herokuapp.com/api/Simulado', newObject, {

        }).then(function () {
            router.push('/')
            toast.success('Simulado salvo com sucesso ')
        }).catch(function (error) {
            toast.error(`Um erro inesperado aconteceu ${error.response.status}`)
            setIsSpinning(false)
        });
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    function youtubeOrThumbnail(e) {
        setYoutubeOrThumbnailSelected(e.target.value)
    }

    function onChange(time, timeString) {
        console.log(time, timeString);
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
                    name="radio-button"
                    label="Thumbnail Simulado"
                    rules={[{ required: true, message: 'Please pick an item!' }]}
                >
                    <Radio.Group onChange={e => youtubeOrThumbnail(e)}>
                        <Radio.Button value="a">Upload Thumbnail</Radio.Button> <S.Or>Ou</S.Or>
                        <Radio.Button value="b" style={{ padding: "0 21px 0 22px", marginTop: "4px" }}>Link Do Youtube</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                {youtubeOrThumbnailSelected == "a" ?
                    (
                        <Form.Item
                            name="upload"
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button style={{ color: '#000000D9', border: '1px solid #d9d9d9' }} icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                    ) : youtubeOrThumbnailSelected == "b" ?
                        (
                            <Form.Item
                                name='linkYoutube'
                                label="Youtube Link"

                            >
                                <Input addonBefore="youtube.com/" defaultValue="mysite" />
                            </Form.Item>
                        ) : (null)
                }
                <S.SubTitle>Ordem das perguntas</S.SubTitle>
                <Radio.Group name="radiogroup" onChange={(e) => orderQuestions(e)}>
                    <Space direction="vertical">
                        <Radio value={1}>Sequencial</Radio>
                        {OrderQuestionsSelected == 1 ?
                            (
                                <Form.Item
                                    name='sequencial'
                                    label="Quantidade de Perguntas"
                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                            ) :
                            (
                                null
                            )
                        }
                        <Radio value={2}>Aleatória</Radio>
                        {OrderQuestionsSelected == 2 ?
                            (
                                <Form.Item
                                    name='aleatoria'
                                    label="Quantidade de Perguntas Por Simulado"
                                >
                                    <InputNumber min={0} />
                                </Form.Item>
                            ) :
                            (
                                null
                            )
                        }
                    </Space>
                </Radio.Group>
                <Form.Item
                    name="tempoPorProva"
                    label="Tempo por prova"
                    rules={[
                        {
                            message: 'Insira seu Tempo',
                        },
                    ]}
                >
                    <TimePicker onChange={onChange} />
                </Form.Item>





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
