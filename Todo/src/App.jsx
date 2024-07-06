import { useEffect, useState } from "react";
import { TodoContextProvider } from "./Contexts/index";
import { TodoForm, ToDoItem } from "./Components/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos((prev) => [{ id: Date.now(), ...task }, ...prev]);
  };

  const updateTask = (id, task) => {
    setTodos((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? task : prevTask))
    );
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((todoTask) => todoTask.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask
      )
    );
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks && tasks.length > 0) {
      setTodos(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTask, updateTask, deleteTask, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */} <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((task) => (
              <div key={task.id} className="w-full">
                <ToDoItem task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
