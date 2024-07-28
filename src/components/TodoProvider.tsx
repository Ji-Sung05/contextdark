import { ReactNode, createContext, useMemo, useState, useRef } from 'react'

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

export const TodoValueContext = createContext<Todo[] | undefined>(undefined)
export const TodoActionsContext = createContext<{
  add: (todo: string) => void;
  toggle: (id: number) => void;
  delete: (id: number) => void;
} | undefined>(undefined)
export const DarkValueContext = createContext<boolean | undefined>(undefined)
export const DarkActionContext = createContext<{toggleDarkMode:() => void} | undefined>(undefined)

interface Props {
  children: ReactNode
}

const TodoProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([
    {id: 1, todo: '빨래하기', done: false},
    {id: 2, todo: '공부하기', done: false},
  ])

  const idRef = useRef<number>(3)

  //useMemo를 통해 actions 함수들이 처음 렌더링 됐을 때만 생성되게 한다.
  const actions = useMemo(
    () => ({
      add(todo: string) {
        const id = idRef.current
        idRef.current += 1
        setTodoList((prev) => [
          ...prev,
          {
            id,
            todo,
            done: false
          }
        ])
      },
      toggle(id: number) {
        setTodoList((prev) => 
          prev.map((item) => 
            item.id === id ? {
              ...item,
              done: !item.done
            } : item
          )
        )
      },
      delete(id: number) {
        setTodoList((prev) => prev.filter((item) => item.id !== id))
      }
    }),
    []
  )

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <DarkActionContext.Provider value={{toggleDarkMode}}>
      <DarkValueContext.Provider value={isDarkMode}>
        <TodoActionsContext.Provider value={actions}>
          <TodoValueContext.Provider value={todoList}>
            {children}
          </TodoValueContext.Provider>
        </TodoActionsContext.Provider>
      </DarkValueContext.Provider>
    </DarkActionContext.Provider>
  )
}

export default TodoProvider