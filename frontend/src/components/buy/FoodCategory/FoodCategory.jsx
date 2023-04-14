import React from "react";
import { Card } from "react-bootstrap";
import "./FoodCategory.css";
import { Link } from "react-router-dom";
/**
 * FoodCategory imports data from 'Food' component
 * and provides card design for 'Food' component
 */
const FoodCategory = (props) => {
  const { keys,title, subtitle, img, catagories, price } = props.items;
  return (
    <div className="food-cat-card">
      <Card style={{backgroundColor: "#D1E8B6"}}>
        <Card.Body>
          <Card.Img variant="top w-50 py-3" src={img} />
          <Card.Title>
            <Link to={"/food/details/"+keys}>{title}</Link>
          </Card.Title>
          <Card.Text>{subtitle}</Card.Text>
          <Card.Text>Type : {catagories}</Card.Text>
          <Card.Text>Rs.{price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCategory;
