import React from 'react'
import { useTable,useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { column } from './columns'
import { useMemo } from 'react'
import './table.css'
import GlobalFilter from './GlobalFilter'
import Filter from './columnFilter'

const ReactFiltering = () => {
    const columns = useMemo(() => column, [])
    const data = useMemo(() => MOCK_DATA, []);
    const defaultColumn=useMemo(()=>{
        return{
            Filter
        }
    },[])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn
    },
    useFilters,
    useGlobalFilter)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = tableInstance
    const {globalFilter}=state
    return (
        <div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}  />
            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                        <div>
                                            {column.canFilter ? column.render('Filter'):null}
                                        </div>
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

export default ReactFiltering
