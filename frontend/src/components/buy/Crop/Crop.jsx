import React, { useState } from "react";
import "./Crop.css";
import demoData from "../Demodata/demo";
import FoodCategory from "../FoodCategory/FoodCategory";
/**
 * Food component to find foods according to category
 */
const Food = () => {
  const data = demoData;
  const [foods, setFoods] = useState(data);
  const [category, setCategory] = useState("Grains");
  const selectCategory = foods.filter((cat) => cat.catagories === category);
  /**
   * {selectCategory} to filter food accord to category from {category}
   */
  return (
    <div className="container food-header py-5">
        {/* nav {onClick} to select food cards accord to category */}
      <nav style={{backgroundColor: "#D1E8B6"}}>
        <a onClick={() => setCategory("Grains")}>Grains </a>
        <a onClick={() => setCategory("Nuts")}>Nuts</a>
        <a onClick={() => setCategory("Oil")}>Oil</a>
      </nav>
      <div className="container py-5">
        <div className="row">
          {selectCategory.map((item) => (
            <div className="col-md-4 py-3">
              <FoodCategory items={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
