import React from 'react';
import TodoProvider from './components/TodoProvider';
import Display from './components/Display';
import Todo from './components/Todo';
import ToggleBtn from './components/ToggleBtn';

function App() {
  return (
    <TodoProvider>
      <Display>
        <Todo />
        <ToggleBtn />
      </Display>
    </TodoProvider>
  );
}

export default App;
