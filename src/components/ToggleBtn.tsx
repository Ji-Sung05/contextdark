import React from 'react'
import useDarkActionContext from '../utils/useDarkActionContext'

const ToggleBtn = () => {
  const { toggleDarkMode } = useDarkActionContext()
  return (
    <button onClick={toggleDarkMode}>ToggleBtn</button>
  )
}

export default ToggleBtn