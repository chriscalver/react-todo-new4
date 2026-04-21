import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import SendText from "./SendText";
import logo from "./test.jpg"; 
uuidv4();

function compare( a, b ) {
  if ( a.task < b.task ){
    return -1;
  }
  if ( a.task > b.task ){
    return 1;
  }
  return 0;
}

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // const savedTodos2 = savedTodos.reverse();
    setTodos(savedTodos);
    console.log(savedTodos);

  }, []);
  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos.sort(compare));
    localStorage.setItem("todos", JSON.stringify(newTodos));
   // console.log(newTodos);
  };
  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const sendAsText = (id) => {
    const newTodos = todos.filter((todo) => todo.id === id);
    const toNumber = window.prompt("Enter destination number (E.164 format, e.g. +15195551234):", "+15197099549");

    if (!toNumber || !toNumber.trim()) {
      return;
    }
   
    const newTodos2 = JSON.stringify(newTodos[0].task);
    // console.log(newTodos2);
    SendText("New Reminder " + newTodos2, toNumber.trim());
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos.sort(compare));
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };




  return (
    <div className="TodoWrapperLS">     
      <img src={logo} alt="Logo"/>
      <TodoForm  addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            sendAsText={sendAsText}
          />
        )
      )}
    </div>
  );
};
