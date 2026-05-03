import { use, useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./component/TaskCard";
import Input from "./component/Input";
import Add from "./component/Add";

const App = () => {

  const [tasks , setTasks] = useState(()=>{
    try{
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [] ;
    }catch(e){
      return [] ;
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  } , [tasks]);

  const [input, setInput] = useState("");

  const addTask = () => {
  if (input.trim() === "") return;

  const newTask = {
    id: Date.now(),
    text: input,
    completed: false,
  };

  setTasks([...tasks, newTask]);
  setInput("");
  };

  const deleteTask = (id)=>{
    const updateTask = tasks.filter((task)=> task.id != id);
    setTasks(updateTask);
  }

  const toggleTask = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task 
  );
  setTasks(updatedTasks);
  };

  return (
    <div className="main">
      <h1>TODO LIST APP</h1>
      <div className="container">
        <div className="input-section">
          <Input input={input} setInput={setInput}/>
          <Add addTask={addTask}/>
        </div>
        <div className="task-section">
          {
          tasks.length === 0 ? (
          <div className="no-task-box">
            <div className="bounce-ball"></div>
              <p>NO TASK LEFT</p>
          </div>
          ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;