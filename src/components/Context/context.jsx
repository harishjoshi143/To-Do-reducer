import { createContext, useReducer, useState } from "react";
export const ContextData = createContext();

export function ContextProvider({ children }) {
  const [todo, setTodo] = useState("");
  const [data, dispatch] = useReducer(reducer, []);
  const [valIndex, setValIndex] = useState(null);

  function addData() {
    if (valIndex !== null) {
      dispatch({ type: "UPDATE DATA", index: valIndex, payload: todo });
    } else {
      dispatch({ type: "ADD DATA", payload: todo });
    }
    setTodo("");
    setValIndex(null);
  }

  function HandlaDelete(index) {
    dispatch({ type: "DELETE DATA", index });
  }
  function HandleUpdate(index) {
    const allData = data[index];
    setTodo(allData.payload);
    setValIndex(index);
  }

  function completeTodo(index) {
    dispatch({ type: "COMPLETE TODO", index });
  }

  return (
    <ContextData.Provider
      value={{
        todo,
        setTodo,
        addData,
        data,
        HandleUpdate,
        HandlaDelete,
        valIndex,
        completeTodo,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD DATA":
      return [...state, { payload: action.payload, completed: false }];
    case "DELETE DATA":
      return state.filter((_, i) => action.index !== i);
    case "UPDATE DATA":
      return state.map((item, i) =>
        action.index === i ? { ...item, payload: action.payload } : item
      );
    case "COMPLETE TODO":
      return state.map((item, i) =>
        action.index === i ? { ...item, completed: !item.completed } : item
      );

    default:
      state;
  }
}
