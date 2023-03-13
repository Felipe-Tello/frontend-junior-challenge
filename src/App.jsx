import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import TodoForm from "components/TodoForm";
import { ToastContainer } from 'react-toastify';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="root">
      <ToastContainer position="top-right" transition={Slide} autoClose={3000} limit={6} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      <TodoList />
      <TodoResults />
      <TodoForm />
    </div>
  );
};

export default App;
