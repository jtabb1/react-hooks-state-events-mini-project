import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ CATEGORIES, selected, setSelected }) {



  const buttons = CATEGORIES.map( c => (
    <button>{c}</button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
