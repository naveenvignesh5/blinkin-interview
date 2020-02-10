import React from "react";

// libs
import { getItem } from "../lib/storage";

// components
import ListItem from "./ListItem";

// constants
import { TODO_LIST_KEY } from "../constants";

const TodoList = () => {
  const todos = getItem(TODO_LIST_KEY) || [];

  return (
    <div className="list">
      {Object.keys(todos).map((_todo_key, i) => (
        <ListItem
          key={`key-${todos[_todo_key].id}`}
          todo={todos[_todo_key]}
        />
      ))}
    </div>
  );
};

export default TodoList;
