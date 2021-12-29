import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Radio, Space, Divider, Upload, InputNumber, TimePicker } from 'antd';
import * as S from './styles'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { UploadOutlined } from '@ant-design/icons'

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
    titulo: string
    descricao: string
    linkYouTube?: string
    thumbnail?: string
    sequencial: number
    aleatoria: number
    tempo: boolean
    tempoPorProva: string
}

export type Time = {
    tempoPorProva: string
}
// titulo: "titulo"
// descricao: "descrição"
// thumbnail: [{… }]
// youtubeOuThumbnail: "thumbnail"
// aleatoria: 12
// tempoPorProva: Moment { _isAMomentObject: true, _isUTC: false, _pf: {… }, _locale: Locale, _d: Tue Dec 28 2021 01: 00: 00 GMT - 0300(Horário Padrão de Brasília), … }
// [[Prototype]]: Object

export default function FormCreatedSimulated() {
    const antIcon = <LoadingOutlined style={{ fontSize: 34, color: "#E414B2" }} spin />
    const [ordemDasPerguntas, setOrdemDasPerguntas] = useState({ ordemDasPerguntas: 0 })
    const [isSpinning, setIsSpinning] = useState<boolean>(false)
    const [youtubeOrThumbnailSelected, setYoutubeOrThumbnailSelected] = useState("")
    const [OrderQuestionsSelected, setOrderQuestionsSelected] = useState<number>(0)
    const [time, setTime] = useState<Time>({ tempoPorProva: '' })
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
        console.log("values", values)
        // setIsSpinning(true)
        const newObject = Object.assign(values, time)
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
        setTime({ ...time, tempoPorProva: timeString })
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
                    name="youtubeOuThumbnail"
                    label="Capa do simulado"
                    rules={[{ required: true, message: 'Selecione uma das opções!' }]}
                >
                    <Radio.Group onChange={e => youtubeOrThumbnail(e)}>
                        <Radio.Button value="thumbnail">Imagem</Radio.Button> <S.Or>Ou</S.Or>
                        <Radio.Button value="youtube" style={{ padding: "0 21px 0 22px", marginTop: "4px" }}>Link Do Youtube</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                {youtubeOrThumbnailSelected == "thumbnail" ?
                    (
                        <Form.Item
                            name="thumbnail"
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button style={{ color: '#000000D9', border: '1px solid #d9d9d9' }} icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                    ) : youtubeOrThumbnailSelected == "youtube" ?
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
                <Form.Item name="radio-group" rules={[{ required: true, message: 'Selecione uma das opções!' }]}>
                    <Radio.Group name="radiogroup" onChange={(e) => orderQuestions(e)} >
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
                </Form.Item>
                <Form.Item
                    name="tempoPorProva"
                    label="Tempo por prova"
                >
                    <TimePicker onChange={onChange} />
                </Form.Item>
                <Divider style={{ borderTop: "1px solid rgba(0, 0, 0, 0.06)", width: "100vw" }} />
                <Form.Item>
                    <S.ContainerButton>
                        <Button type="primary" danger onClick={goTohome} htmlType="submit">
                            VOLTAR
                        </Button>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: '#46a6e6', marginLeft: '10px' }}>
                            PROXIMO
                        </Button>
                    </S.ContainerButton>
                </Form.Item>
                <br />
            </Form>
        </Spin>
    );
}
