import React, { useContext } from "react";
import { ContextData } from "./context";
import click from "../../images/remove.png";

export default function Data() {
  const {
    todo,
    setTodo,
    addData,
    data,
    HandleUpdate,
    HandlaDelete,
    valIndex,
    completeTodo,
  } = useContext(ContextData);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        style={{ outline: "none", border: "none", padding: "5px" }}
        type="text"
        placeholder="Enter Todo..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        style={{
          padding: "5px",
          marginLeft: "10px",
          backgroundColor: "green",
          border: "none",
          color: "white",
        }}
        onClick={addData}
      >
        {valIndex !== null ? "Update" : "Add Data"}
      </button>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "black",
            padding: "5px",
            color: "white",
            marginTop: "20px",
          }}
        >
          <p
            className={item.completed ? "line-through" : ""}
            style={{ margin: "0", padding: "0" }}
          >
            {item.payload}
          </p>

          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => completeTodo(index)}
              style={{
                backgroundColor: "black",
                border: "none",
                marginRight: "20px",
              }}
            >
              <img
                style={{ height: "20px", width: "20px" }}
                src={click}
                alt=""
              />
            </button>
            <button
              style={{
                marginRight: "20px",
                backgroundColor: "red",
                border: "none",
                color: "white",
              }}
              onClick={() => HandlaDelete(index)}
            >
              {" "}
              <svg
                style={{ height: "20px", width: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button
              style={{ padding: "5px" }}
              onClick={() => HandleUpdate(index)}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
