import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { FaPlus } from "react-icons/fa";

const AddTodo = () => {
  // Define state for input text
  const [text, setText] = useState('');

   // Get dispatch function from Redux
  const dispatch = useDispatch();

   // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // If text is empty or contains only whitespace, return
    if (!text.trim()) return;

    // Dispatch addTodo action with the text
    dispatch(addTodo(text));

    // Clear the input field
    setText('');
  };

  return (
    <form className='form-group d-flex justify-content-center align-items-center w-100 mb-5' onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add new todo..."
        className='form-control me-2 shadow'
      />
      <button className='btn btn-dark w-25 shadow add' type="submit"><FaPlus/></button>
    </form>
  );
};

export default AddTodo;
