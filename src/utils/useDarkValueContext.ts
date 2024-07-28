import { useContext } from "react";
import { DarkValueContext } from "../components/TodoProvider"; 

function useDarkValueContext(): boolean {
  const value = useContext(DarkValueContext)
  if(value === undefined) {
    throw new Error(`DarkValueContext should be used within TodoProvider`)
  }
  return value
}

export default useDarkValueContext