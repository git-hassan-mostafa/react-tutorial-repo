import React from 'react'
import { useColumnOrder, useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { column,group } from './columns'
import { useMemo } from 'react'
import './table.css'

const TableOrdering = () => {
    const columns = useMemo(() => column, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    },
    useColumnOrder )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        setColumnOrder
    } = tableInstance
    const changeOrder=()=>{
        setColumnOrder(['id','first_name','last_name','phone','country','date_of_birth'])
    }
    return (
        <>
            <button onClick={changeOrder}>change order</button>
            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    {footerGroups.map(footer => (
                        <tr {...footer.getFooterGroupProps()}>
                            {
                                footer.headers.map(column => (
                                    <td {...column.getFooterProps()}>
                                        {column.render('Footer')}
                                    </td>
                                ))}
                        </tr>
                    ))
                    }
                </tfoot>
            </table>
        </>
    )
}

export default TableOrdering
