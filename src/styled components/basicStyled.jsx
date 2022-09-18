import React from 'react'
import styled from 'styled-components'
const StyledButton=styled.button`
padding:10px;
background-color:red;
color:white;
border:1px solid black;
font-weight: 900;
`
const BasicStyled = () => {
  return (
    <div>
      <StyledButton >styled button</StyledButton>
    </div>
  )
}

export default BasicStyled
