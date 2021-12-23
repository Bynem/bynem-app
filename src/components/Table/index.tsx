import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { DivTable } from './styles';

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
        key: '4',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '6',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '7',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '9',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '10',
        name: 'Joe Black',
        author: 32,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '11',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '12',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '13',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '14',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
    {
        key: '15',
        name: 'Joe Black',
        author: 99,
        simuled: 'Sidney No. 1 Lake Park',
    },
];

export default function TableAnt() {
    return (
        <DivTable>
            <Table pagination={{ pageSize: 8 }} loading={false} columns={columns} dataSource={data} />
        </DivTable>

    )
}
