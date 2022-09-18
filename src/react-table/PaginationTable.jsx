import React from 'react'
import { useTable,usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { column,group } from './columns'
import { useMemo } from 'react'
import './table.css'

const PaginationTable = () => {
    const columns = useMemo(() => column, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    },
    usePagination)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow
    } = tableInstance
    const {pageIndex,pageSize}=state
    return (
        <div>
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
                        page.map(row => {
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
            </table>
            <br />
            <strong>
                {pageIndex+1} of {pageOptions.length}
                {' '}
            </strong>
            <span>
                go to page : 
                <input type="text" defaultValue={pageIndex +1}
                onChange={(e)=>{
                    const pageNum=e.target.value ? Number(e.target.value) :0;
                    gotoPage(pageNum -1)
                }
                    
                } />
            </span>
            <select value={pageSize} onChange={(e)=>{
                setPageSize(Number(e.target.value))
            }}>
                {
                    [10,25,50].map(pageSize=>(
                        <option key={pageSize} value={pageSize}>
                            show {pageSize}
                        </option>
                    ))
                }
            </select>
            {canPreviousPage && <button onClick={()=>gotoPage(0)}> first page </button> }
            {canPreviousPage && <button onClick={()=>previousPage()} >previous</button>} 
            {canNextPage && <button onClick={()=>nextPage()} >next</button>}
            {canNextPage && <button onClick={()=>gotoPage(pageCount - 1)} >last page</button>}

        </div>
    )
}

export default PaginationTable
