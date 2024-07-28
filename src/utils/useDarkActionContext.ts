import { useContext } from "react";
import { DarkActionContext } from "../components/TodoProvider";

interface DarkActionContextType {
  toggleDarkMode: () => void;
}

function useDarkActionContext(): DarkActionContextType {
  const value = useContext(DarkActionContext)
  if(value === undefined) {
    throw new Error(`useDarkActionContext should be used within TodoProvider`)
  }
  return value
}

export default useDarkActionContext