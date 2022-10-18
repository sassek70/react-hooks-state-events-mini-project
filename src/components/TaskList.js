import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, filterName, onSetTasksList}) {

  const handleDelete = (text) => {
    const newList = tasks.filter((task) => task.text !== text)
    onSetTasksList(newList)
  }
  
  // applies the filter value then maps tasks to <Task />
  const filteredList = tasks.filter((task) => (filterName === "All" || filterName === undefined ? "All" : task.category === filterName))
  // shorter ternary = (!filterName || filterName === "All" ? "All" : task.category === filterName))
  
  const taskList = filteredList.map((task) => {
    return <Task key={task.text} id={task.name} text={task.text} category={task.category} deleteTask={() => handleDelete(task.text)}/>
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
