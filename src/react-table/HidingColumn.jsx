import React from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { column, group } from './columns'
import { useMemo } from 'react'
import './table.css'

const HidingColumn = () => {
    const columns = useMemo(() => column, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps,
    } = tableInstance
    return (
        <>
            <div>
                <div>
                    <input  type="checkbox" {...getToggleHideAllColumnsProps()} /> toggle all
                </div>
                {
                    allColumns.map((column) => (
                        <div key={column.id}>
                            
                            <label>
                                 <input type="checkbox" {...column.getToggleHiddenProps()} />
                                {column.Header}
                            </label>
                        </div>

                    ))
                }
            </div>

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

export default HidingColumn
