import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
export type GridRowsProp = {
    id: number;
    name: string;
    author: string;
    simuled: string;
}
export type GridColDef = {
    field: string;
    width?: number;
    headerName?: string;
    hide?: boolean;
    flex?: number;

}


const rows: GridRowsProp[] = [
    { id: 1, name: "Hello", author: "World", simuled: '/nada' },
    { id: 2, name: "Hello2", author: "World2", simuled: '/nada' },
    { id: 3, name: "Hello3", author: "World3", simuled: '/nada' },
    { id: 4, name: "Hello4", author: "World4", simuled: '/nada' },
    { id: 5, name: "Hello5", author: "World6", simuled: '/nada' },
];

const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "name", headerName: "Nome", width: 150, flex: 1 },
    { field: "author", headerName: "Autor", width: 200, flex: 0.5 },
    { field: "simuled", headerName: "Simulado", width: 50, flex: 0.1 }
];

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
            <DataGrid rows={rows} columns={columns} onCellClick={(e) => { console.log(e) }} />
        </TableDiv>
    );
}
export const TableDiv = styled.div`
    height: 50vh;
    width: 70% ;
    margin-left: auto;
    margin-right: auto;
`