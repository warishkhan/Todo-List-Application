import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';
import { FaTrash } from "react-icons/fa";

const TodoList = () => {
  // Get todos array from Redux store
  const todos = useSelector(state => state.todos);

  // Get dispatch function from Redux
  const dispatch = useDispatch();

// Function to handle toggling todo completion status
  const handleToggle = id => {
    dispatch(toggleTodo(id));
  };

  // Function to handle deleting a todo
  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul className=' w-100 d-flex justify-content-between align-items-center flex-column m-0 p-0'>
      {todos.map(todo => (
        <li key={todo.id} className='shadow mb-3 w-100 list-group-item rounded d-flex justify-content-between align-items-center p-2'>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(todo.id)}
            className={todo.completed ? "text-success capitalize fs-3" : "text-black capitalize fs-3"}
          >
            {todo.text}
          </span>
          <button className='btn btn-dark hover' onClick={() => handleDelete(todo.id)}><FaTrash/></button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
