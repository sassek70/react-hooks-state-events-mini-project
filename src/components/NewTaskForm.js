import React, {useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })


  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((formData) => ({...formData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({
      text: "",
      category: "Code"
    })
  }

  const addItemCategory = categories.slice(1).map((category) =>{
    return <option key={category} value={category}>{category}</option>
  })


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {addItemCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
