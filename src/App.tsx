import React from 'react';
import TodoProvider from './components/TodoProvider';
import Display from './components/Display';
import Todo from './components/Todo';
import ToggleBtn from './components/ToggleBtn';

function App() {
  return (
    // Provider 안에 작성된 컴포넌트들은 전달한 값들을 불러와서 사용할 수 있다.
    <TodoProvider>
      <Display>
        <Todo />
        <ToggleBtn />
      </Display>
    </TodoProvider>
  );
}

export default App;
