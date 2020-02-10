import React, { memo, useState } from "react";

import { getItem, setItem } from "../lib/storage";

import { TODO_LIST_KEY } from "../constants";

const styles = {
  checkBox: {
    marginLeft: 50
  },
  is_done: {
    textDecoration: "line-through"
  }
};

const todos = getItem(TODO_LIST_KEY);

const ListItem = memo(({ todo }) => {
  const [is_done, update_is_done] = useState(todo.isDone);

  let list_item_style = {};

  const toggle_is_done = () => {
    let _todo = todo;

    if (_todo) {
      todo.isDone = !is_done;

      todos[_todo.id] = _todo;

      setItem(TODO_LIST_KEY, todos);

      update_is_done(!is_done);
    }
  };

  if (is_done) {
    list_item_style = {
      ...styles.is_done
    };
  }

  return (
    <a className="list-item" style={list_item_style}>
      {todo.value}
      <input
        checked={is_done}
        onChange={toggle_is_done}
        type="checkbox"
        style={styles.checkBox}
      />
    </a>
  );
});

export default ListItem;
