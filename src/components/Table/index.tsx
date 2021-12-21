import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import Link from "@material-ui/core/Link";
export type GridRowsProp = {
    id: number;
    name: string;
    author: string;
    simuled: string;
}

const rows: GridRowsProp[] = [
    { id: 1, name: "Hello", author: "World", simuled: 'Simulado' },
    { id: 2, name: "Hello2", author: "World2", simuled: 'Simulado' },
    { id: 3, name: "Hello3", author: "World3", simuled: 'Simulado' },
    { id: 4, name: "Hello4", author: "World4", simuled: 'Simulado' },
    { id: 5, name: "Hello5", author: "World6", simuled: 'Simulado' },
];


const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "name", headerName: "Nome", width: 150, flex: 1 },
    { field: "author", headerName: "Autor", width: 200, flex: 0.5 },
    {
        field: "simuled",
        headerName: "Simulado",
        width: 50,
        flex: 0.1,
        renderCell: (params) => (
            <Link href={`/`}>{params.value?.toString()}</Link>
        )
    }
]

export default function Table() {
    axios.get('https://bynem-app.herokuapp.com/api/Simulado')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    return (
        <TableDiv>
            <DataGrid localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} rows={rows} columns={columns} onCellClick={(e) => { console.log(e) }} />
        </TableDiv>
    );
}

export const TableDiv = styled.div`
    height: 50vh;
    margin-left: 2rem;
    margin-right: 2rem;
`