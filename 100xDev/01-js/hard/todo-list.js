/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    if (index >= 0 && this.todos.length > index) {
      this.todos.splice(index, 1);
    }
  }
  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && this.todos.length > index) {
      return this.todos[index];
    }
    return null;
  }

  update(index, todo) {
    if (index >= 0 && this.todos.length > index) {
      this.todos[index] = todo;
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
