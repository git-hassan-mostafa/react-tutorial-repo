import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => {
    const notify = () => {
        toast('hello world', {
            position:'bottom-left',
            autoClose:true,
            type:'error',
            theme:'dark',
            closeOnClick:true
        })
    }
    return (
        <div>
            <button onClick={notify} >click me to notify</button>
            <ToastContainer

            />
        </div>
    )
}

export default ToastNotification
