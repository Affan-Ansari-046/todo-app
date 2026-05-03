import { Trash , Check , CheckCheck } from 'lucide-react'
import React from 'react'

const TaskCard = ({ task , deleteTask , toggleTask }) => {

  const deleteThis = ()=>{
    deleteTask(task.id);
  }

  const toggleThis = ()=>{
    toggleTask(task.id);
  }

  return (
    <div className="task-card">
      <p
      onClick={toggleThis}
      style={{
        color : task.completed ? "green" : "red",
        cursor : "pointer"
      }}
      >{
        task.completed ? "Completed" : task.text
      }</p>
      <div style={{display : "flex" , gap : "10px"}}>
        <button
        style={{
          color : task.completed ? "green" : "red"
        }}
        onClick={toggleThis}
        >{task.completed ? <CheckCheck/>:<Check/>}</button>
        <button onClick={deleteThis}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
