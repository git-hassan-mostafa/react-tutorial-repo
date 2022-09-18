import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeButton } from './styleFile'
const theme={
        light:{
            color:'black',
            background:'white'
        },
        dark:{
            color:'white',
            background:'black'
        }
    }
    
const ThemeStyle = () => {
    const [initialTheme,setTheme]= useState(theme.light)
  return (
    <div>
      <ThemeProvider theme={initialTheme}>
        <ThemeButton >theme button</ThemeButton>
      </ThemeProvider>
      <button onClick={()=>setTheme(theme.light)}>light mode</button>
      <button onClick={()=>setTheme(theme.dark)}>dark mode</button>
    </div>
  )
}

export default ThemeStyle

