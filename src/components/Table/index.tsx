import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Link from "@material-ui/core/Link";

export type GridRowsProp = {
    id: number;
    name: string;
    author: string;
    simuled: string;
}

const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "titulo", headerName: "Nome", width: 150, flex: 1 },
    { field: "author", headerName: "Autor", width: 200, flex: 0.5 },
    {
        field: "linkSimulado",
        headerName: "Simulado",
        width: 50,
        flex: 0.1,
        renderCell: (params) => (
            <Link href={`/`}>{params.value?.toString()}</Link>
        )
    }
]

export default function Table() {
    const [simulados, setSimulados] = useState<GridRowsProp[]>([] as GridRowsProp[]);

    useEffect(() => {
        async function getSimulados() {
            await axios.get('http://localhost:5000/api/Simulado')
                .then(function (response) {
                    setSimulados(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        getSimulados();
    }, []);

    return (
        <TableDiv>
            <DataGrid localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} rows={simulados} columns={columns} onCellClick={(e) => { console.log(e) }} />
        </TableDiv>
    );
}

export const TableDiv = styled.div`
    height: 50vh;
    margin-left: 2rem;
    margin-right: 2rem;
`