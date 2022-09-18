
import React from 'react'
import { useState } from 'react';
import ReactModal from 'react-modal';
const ReactModel = () => {
    const [state,setState]= useState(false)
  return (
    <div>
        <button onClick={()=>setState(true)}>open modal</button>
      <ReactModal isOpen={state}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={()=>setState(false)}
      closeTimeoutMS={0}
      style={
        {
            overlay:{
                backgroundColor:'grey',

            },
            content:{
                backgroundColor:'red',
                border:'0',
                width:'100',
                margin:'auto',
                transition:'opacity 2000ms ease-in-out'


            }
        }
      }
      >
        <h1>title</h1>
        <p>body</p>
        <button onClick={()=>setState(false)}>close</button>
      </ReactModal>
    </div>
  )
}

export default ReactModel
