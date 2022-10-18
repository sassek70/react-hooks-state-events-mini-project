import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  // console.log(CATEGORIES)
  // console.log(TASKS)
  //CATEGORIES = ARRAY
  //TASKS = OBJECT
  const [filterName, setFilterButton] = useState("All")
  const [tasksList, setTasksList] = useState(TASKS)
  
  
  const handleSubmit = (newTask) => {
    setTasksList((taskslist) =>[...tasksList, newTask])  
  }
  console.log(tasksList)



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterName={filterName} setFilterButton={setFilterButton}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={tasksList} categories={CATEGORIES} filterName={filterName} setFilterButton={setFilterButton} onSetTasksList={setTasksList}/>
    </div>
  );
}

export default App;
