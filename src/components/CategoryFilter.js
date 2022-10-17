import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [isSelected, setButtonClass] = useState("All")
  
  const toggleSelect = (category) => {
    setButtonClass(category) 
  }


  const renderButton = categories.map((category) => {
    let className = isSelected === category ? "selected" : ""
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
