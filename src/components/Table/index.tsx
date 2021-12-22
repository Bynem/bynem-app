import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Autor',
        dataIndex: 'author',
        key: 'author',
    },

    {
        title: '',
        dataIndex: 'simuled',
        key: 'simuled',
        render: (record) => <a href={record.simuled}>Simular</a>,
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        author: 32,
        simuled: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        author: 42,
        simuled: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
];

export default function TableAnt() {
    return (

        <Table loading={false} columns={columns} dataSource={data} />

    )
}
