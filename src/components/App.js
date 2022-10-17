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



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterName={filterName} setFilterButton={setFilterButton}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} categories={CATEGORIES} filterName={filterName} setFilterButton={setFilterButton}/>
    </div>
  );
}

export default App;
