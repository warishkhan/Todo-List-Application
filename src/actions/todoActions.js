// Define a variable to track the ID of the next todo
let nextTodoId = 0;

// Action creator function to add a new todo
export const addTodo = text => ({
  // Action type
  type: 'ADD_TODO',
  // Action payload containing the todo ID and text
  payload: {
    id: nextTodoId++, // Assign the next todo ID and then increment it
    text,
  },
});

// Action creator function to toggle the completion status of a todo
export const toggleTodo = id => ({
  // Action type
  type: 'TOGGLE_TODO',
  // Action payload containing the ID of the todo to toggle
  payload: { id },
});

// Action creator function to delete a todo
export const deleteTodo = id => ({
  // Action type
  type: 'DELETE_TODO',
  // Action payload containing the ID of the todo to delete
  payload: { id },
});
