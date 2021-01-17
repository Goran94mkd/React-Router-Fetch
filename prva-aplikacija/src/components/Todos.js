import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then((data) => {
      const responseTodos = data;
      setTodos(responseTodos);
    });
  }, []);

  return (
    <div>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 35).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Todos;
