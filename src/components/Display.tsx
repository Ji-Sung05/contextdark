import React, { ReactNode } from 'react'
import useDarkValueContext from '../utils/useDarkValueContext'

interface Props {
  children: ReactNode;
}

const Display = ({children}: Props) => {
  const isDarkMode = useDarkValueContext()
  
  return (
    <div 
      style={{
        width: '100vw', 
        height: '100vh', 
        backgroundColor: isDarkMode ? 'black': 'white', 
        color: isDarkMode ? 'white': 'black'}}>
      {children}
    </div>
  )
}

export default Display