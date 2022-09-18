import React from 'react'
import { useTable,useSortBy } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { column,group } from './columns'
import { useMemo } from 'react'
import './table.css'

const ReactSorted = () => {
    const columns = useMemo(() => column, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    },useSortBy)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance
    return (
        <div>
            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {
                                                column.isSorted ? (column.isSortedDesc? ' <<' : ' >>'):''
                                            }
                                        </span>
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
        </div>
    )
}

export default ReactSorted
