import React from 'react';
import styled from 'styled-components'

export default function TableD() {
    return (
        <TableDiv>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableColumn>Dessert</TableColumn>
                        <TableColumn>Dessert</TableColumn>
                        <TableColumn></TableColumn>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableColumn>1</TableColumn>
                        <TableColumn>2</TableColumn>
                        <TableColumn>3</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>1</TableColumn>
                        <TableColumn>2</TableColumn>
                        <TableColumn>3</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>1</TableColumn>
                        <TableColumn>2</TableColumn>
                        <TableColumn>3</TableColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </TableDiv>
    );
}

export const TableDiv = styled.div`
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    width: 100%;
    overflow-x: auto;
`

export const Table = styled.table`
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 650px;
    border-color: grey;
    box-sizing: border-box;
`

export const TableHead = styled.thead`
    vertical-align: middle;
    border-color: inherit;
    display: table-header-group;
`

export const TableRow = styled.tr`
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
    border-color: inherit;
`

export const TableColumn = styled.th`
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    text-align: left;
    padding: 16px;
    color: rgba(0, 0, 0, 0.87);
`

export const TableBody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`




export const TableBody3 = styled.div``
export const TableBody4 = styled.div``
export const TableBody5 = styled.div``