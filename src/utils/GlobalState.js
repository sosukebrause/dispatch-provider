import React, { useReducer, useContext, createContext } from "react";

const TodoContext = createContext({
  id: "",
  name: "",
  priority: false,
});

function useTodoContext() {
  return useContext(TodoContext);
}
const { Provider } = TodoContext;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: state.length * Math.random(), name: action.name },
      ];

    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });

    case "prioritize":
      return state.map((item, index) => {
        if (index === action.index) {
          return { ...item, priority: !item.priority };
        }
        return item;
      });
    case "completed":
      return state.map((item, index) => {
        if (index === action.index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

    default:
      return state;
  }
}

function TodoProvider({ ...props }) {
  const [state, dispatch] = useReducer(reducer, []);
  return <Provider value={[state, dispatch]} {...props} />;
}

export { TodoProvider, useTodoContext };
//underscore tells developers "dont pay attention to me, this is just here so the index can be used"
