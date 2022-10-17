import React from "react";

function CategoryFilter({categories, filterName, setFilterButton}) {

  
  const toggleSelect = (category) => {
    setFilterButton(category) 
  }


  const renderButton = categories.map((category) => {
    let className = filterName === category ? "selected" : ""
    return <button key={category} onClick={() => toggleSelect(category)} className={className}>{category}</button>
  })



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButton}
    </div>
  );
}

export default CategoryFilter;
