

export const column = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        sticky:'left'
        
    },
    {
        Header: 'First_name',
        Footer: 'First_name',
        accessor: 'first_name',
        sticky:'left'
        

    },
    {
        Header: 'Last_name',
        Footer: 'Last_name',
        accessor: 'last_name',
        sticky:'left'
        
    },
    {
        Header: 'Date_of_birth',
        Footer: 'Date_of_birth',
        accessor: 'date_of_birth',
        
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
        
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email',
        
    }
]

export const group = [
    {
        Header: ' ',
        Footer: ' ',
        columns: [
            {
                Header: 'Id',
                Footer: 'Id',
                accessor: 'id'
            }
        ]
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First_name',
                Footer: 'First_name',
                accessor: 'first_name',
            },
            {
                Header: 'Last_name',
                Footer: 'Last_name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date_of_birth',
                Footer: 'Date_of_birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]