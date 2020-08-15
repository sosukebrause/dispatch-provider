import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList.js";
import { TodoProvider } from "./utils/GlobalState.js";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <h1 className="strikethrough">Hello Fake Redux</h1>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
