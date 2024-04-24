// Define initial state with todos fetched from localStorage or an empty array
const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

// Todo reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Create new todo object
      const newTodo = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
      // Update todos array with new todo
      const updatedTodos = [...state.todos, newTodo];
      // Save updated todos array to localStorage
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      // Return updated state with new todo
      return {
        ...state,
        todos: updatedTodos,
      };
    case 'TOGGLE_TODO':
      // Toggle completion status of the specified todo
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      // Save updated todos array to localStorage
      localStorage.setItem('todos', JSON.stringify(toggledTodos));
      // Return updated state with toggled todo
      return {
        ...state,
        todos: toggledTodos,
      };
    case 'DELETE_TODO':
      // Filter out the specified todo from todos array
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      // Save updated todos array to localStorage
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      // Return updated state without deleted todo
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};

// Export todoReducer
export default todoReducer;
