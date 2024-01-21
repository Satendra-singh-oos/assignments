import React from "react";

const App = () => {
  const todos = [
    {
      title: "First",
      description: "Hello Description",
    },
  ];

  const addTodo = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;

    if (title && description) {
      const todoItem = document.createElement("div");
      todoItem.innerHTML = `Titlte:-${title} && Description:- ${description}`;

      const todoItemDiv = document.querySelector("#todoList");

      todoItemDiv.appendChild(todoItem);

      // Clear input fields
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    }
  };
  return (
    <>
      <div>
        <input id="title" placeholder="enter title...." />
        <br />
        <input id="description" placeholder="enter description...." />
        <br />
        <button onClick={addTodo}> Submit</button>
        <h1>Todos</h1>
        <div id="todoList"></div>
      </div>
    </>
  );
};

export default App;
