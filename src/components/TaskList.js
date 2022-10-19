import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete, selectedFilter}) {
 
  // To filter the list, I compare the state of selectedFilter to the default state of "All". If true, the variable
  // filteredTaskList will be set to all tasks. Otherwise, it will be set to an array of tasks that match the value
  // of selectedFilter state
  const filteredTaskList = selectedFilter === "All" ? tasks: tasks.filter((task) => task.category === selectedFilter)

  // taskList creates a map based on the array created by the filter conditional
  const taskList = filteredTaskList.map((task) => {
    const {text, category} = task
    return <Task key={text} text={text} category={category} handleDelete={handleDelete}/>
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;