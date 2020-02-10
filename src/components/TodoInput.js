import React, { memo, useState } from "react";

import { getItem, setItem } from "../lib/storage";
import { TODO_LIST_KEY } from "../constants";

const styles = {
  input: {
    width: "100%"
  },
  button: {
    marginLeft: 10
  }
};

const TodoInput = memo(() => {
  const [value, updateValue] = useState("");

  const handleValueChange = e => {
    updateValue(e.target.value);
  };

  const add_todo = () => {
    let todos = getItem(TODO_LIST_KEY);

    if (!todos) todos = {};

    if (value) {
      let id = new Date().getTime();
      todos[id] = {
        id,
        value,
        isDone: false
      };
    }

    setItem(TODO_LIST_KEY, todos);

    document.body.dispatchEvent(new Event('updated_list'));
  };

  return (
    <div className="is-flex">
      <div className="field" style={styles.input}>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            value={value}
            onChange={handleValueChange}
            placeholder="What to do ?"
          />
        </div>
      </div>
      <button style={styles.button} onClick={add_todo} className="button">
        Add
      </button>
      <button style={styles.button} onClick={add_todo} className="button">
        Sort
      </button>
    </div>
  );
});

export default TodoInput;
