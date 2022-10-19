import React from "react";

function CategoryFilter({categories, setSelectedFilter, selectedFilter}) {

  //When a button is clicked, it passes the category of that button to the changeFilter function as an argument: (changeFilter(category))
  // changeFilter takes a parameter of category and returns an invokation of the setter function setSelectedFilter with the argument
  // of category - (the clicked button's category in this case)
  // setSelectedFilter lives in the parent file App.js and is passed to CategoryFilter.js as a prop.
  const changeFilter = (category) => setSelectedFilter(category)

  const displayCategories = categories.map((category) => {
  // setting a variable equal to the selectedFilter state (passed in as a prop, after being set by the button click event in changeFilter)
  // the state of selectedFilter is then compared to the most recent button click. If they match, the string "selected" is returned, else empty string
  let className = selectedFilter === category ? "selected" : ""
  // the variable's return is then used to define a value for className to set the class attribute of the button to visually represent
  // which button was selected.
  return (<button key={category}className={className} onClick={() => changeFilter(category)}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
);
}

export default CategoryFilter;