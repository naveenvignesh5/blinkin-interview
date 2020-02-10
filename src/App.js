import React, { useEffect, useState, useCallback } from 'react';

// components
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    document.body.addEventListener("updated_list", forceUpdate);
    
    return function cleanup() {
      document.body.removeEventListener("updated_list", forceUpdate);
    };
  });


  return (
    <section className="section">
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </section>
  );
};

export default App;
