import { useContext } from "react";
import { Todo, TodoValueContext } from "../components/TodoProvider"; 

function useTodoValueContext(): Todo[] {
  const value = useContext(TodoValueContext)
  if(value === undefined) {
    throw new Error(`TodoValueContext should be used within TodoProvider.Provider`)
  }
  return value
}

export default useTodoValueContext