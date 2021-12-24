import React from 'react'
import { Form, Input, Button, Radio, Space, Divider } from 'antd';
import * as S from './styles'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

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
/* eslint-enable no-template-curly-in-string */

export default function FormCreatedSimuled() {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form {...layout} name="nest-messages" labelAlign={"left"} onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name='title'
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
                name='description'
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
                name='author'
                label="Autor"
            >
                <Input defaultValue={"Usuário logado"} />
            </Form.Item>
            <Form.Item
                name='linkYoutube'
                label="Youtube Link"

            >
                <Input addonBefore="youtube.com/" defaultValue="mysite" />
            </Form.Item>
            <S.SubTitle>Ordem das perguntas</S.SubTitle>
            <Radio.Group name="radiogroup" defaultValue={1}>
                <Space direction="vertical">
                    <Radio value={1}>Sequencial</Radio>
                    <Radio value={2}>Aleatória</Radio>
                </Space>
            </Radio.Group>
            <Divider style={{ borderTop: "2px solid rgba(0, 0, 0, 0.06)" }} />
            <Form.Item>
                <S.ContainerButton>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>
                </S.ContainerButton>
            </Form.Item>
            <br />
        </Form>
    );
}
