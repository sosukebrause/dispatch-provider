import React from "react";
import { useTodoContext } from "../utils/GlobalState.js";

const TodoList = () => {
  const [state, dispatch] = useTodoContext();
  return (
    <div>
      <h1>My List: </h1>
      <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item" key={index}>
            <button
              className="btn btn-warning mr-4"
              onClick={() => dispatch({ type: "prioritize", index })}
            >
              {" "}
              Prioritize
            </button>
            <button
              className="btn btn-primary mr-4"
              onClick={() => dispatch({ type: "completed", index })}
            >
              {" "}
              Completed
            </button>
            <button
              className="btn btn-danger mr-4"
              onClick={() => {
                dispatch({ type: "remove", index });
              }}
            >
              {" "}
              Delete
            </button>

            <span
              className={
                item.priority ? "font-weight-bold" : ""
                // item.completed ? "text-muted" : "")
              }
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
