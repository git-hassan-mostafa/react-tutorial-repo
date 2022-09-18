import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NestedRouter = () => {
    return (
        <div>
            <input type="search" />
            <nav>
                <Link to={'product'} > product </Link>
                <br />
                {/* relative links */}
                <Link to={'/nested/new-product'}> new product </Link>
            </nav>
            {' '}
            <Outlet />

        </div>
    )
}
export const Product=()=>{
    return (
        <div>
            <h2>product</h2>
        </div>
    )
}

export const NewProduct=()=>{
    return (
        <div>
            <h2>new product</h2>
        </div>
    )
}
export default NestedRouter;



