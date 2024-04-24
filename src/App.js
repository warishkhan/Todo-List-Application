import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import './App.css'

// Create Redux store using todoReducer
const store = createStore(todoReducer);

function App() {
  return (
     // Provide Redux store to the application
    <Provider store={store}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="shadow col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center flex-column pb-5">
            <h1 className="text-center my-5 text-warning">Todo List</h1>
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
