import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");


function App() {
const [tasksList, setTaskLists] = useState(TASKS)
const [selectedFilter, setSelectedFilter] = useState("All")

  const handleDelete = (text) => {
    const deletedTask = tasksList.filter((task) => text !== task.text  )
   setTaskLists(deletedTask)
  }

  const updateTasks = (newTaskItem) => {
    // pass current state as an arguement, then spread and update state as an array since taskList is an array.
    setTaskLists((tasksList) => [...tasksList, newTaskItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
      <NewTaskForm categoryOptions={CATEGORIES} setNewTaskItem={updateTasks}/>
      <TaskList tasks={tasksList} selectedFilter={selectedFilter} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;