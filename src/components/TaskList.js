import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, filterName}) {
  const [currentList, setCurrentList] = useState(tasks)


  const handleDelete = (text) => {
    const newList = currentList.filter((task) => task.text !== text)
    setCurrentList(newList)
  }
  
  // applies the filter value then maps tasks to <Task />
  const taskList = currentList.filter((task) => (filterName !== "All" ? task.category === filterName : "All")).map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={() => handleDelete(task.text)}/>
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
