import React, { useState } from "react";
  

function NewTaskForm({categoryOptions, setNewTaskItem}) {
  const[newTaskText, setNewTaskText] = useState("")
  const[newTaskCategory, setNewTaskCategory] = useState("Code")

  // The list of categories is passed as a prop to this component from the parent App.js file.
  // Filter category options to not include "All" and then map each option to the drop down list <select> as an <option>.
  const displayOptions = categoryOptions.filter((categoryOption) => categoryOption !== "All").map(
    (categoryOption) => <option key={categoryOption}>{categoryOption}</option>)


  const newTaskInputText = (event) => {
    setNewTaskText(event.target.value)
  }  

  const newTaskInputCategory = (event) => {
    setNewTaskCategory(event.target.value)
  }

  const createNewTaskObj = (event) => {
    event.preventDefault()
    let newTaskObj = {
      text: newTaskText,
      category: newTaskCategory
    }
    setNewTaskItem(newTaskObj)
    setNewTaskText("")
    setNewTaskCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={createNewTaskObj}>
      <label>
        Details
        <input type="text" name="text" value={newTaskText} onChange={newTaskInputText}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={newTaskInputCategory}>
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;