import React, { useRef } from "react";
import { useTodoContext } from "../utils/GlobalState.js";

const Form = () => {
  const inputRef = useRef();
  const [_, dispatch] = useTodoContext();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.classList);
    dispatch({ type: "add", name: inputRef.current.value });
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Enter a todo</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="form-control"
          placeholder="Enter new task"
        />
        <button type="submit" className="btn btn-success mt-5">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Form;
