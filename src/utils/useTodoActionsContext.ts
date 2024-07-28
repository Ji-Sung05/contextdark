import { useContext } from "react";
import { TodoActionsContext } from "../components/TodoProvider"; 

interface TodoActionContextType {
  add: (todo: string) => void;
  toggle: (id: number) => void;
  delete: (id: number) => void;
}

function useTodoActionContext(): TodoActionContextType {
  const value = useContext(TodoActionsContext)
  if(value === undefined) {
    throw new Error(`TodoActionsContext should be used within TodoProvider.Provider`)
  }
  return value
}

export default useTodoActionContext