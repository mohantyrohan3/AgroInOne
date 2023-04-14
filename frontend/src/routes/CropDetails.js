import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import demoData from "../components/buy/Demodata/demo";
import FoodDetailsCard from "../components/buy/CropDetailsCard/CropDetailsCard";
import CartHidden from "../components/buy/CartHidden/CartHidden";
import { addToDatabaseCart, getDatabaseCart } from "../components/buy/Utilities/datbaseManager";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/buy/Header/Header";
import { Container } from "react-bootstrap";
/**
 * FoodDetails provides details of food
 * select food according food key or route param dynamically
 * comes from 'FoodCategory' component (/food/details/+title)
 * { title } = useParams()// provides data from App.js accord to route (/food/details/+title)
 */
const FoodDetails = () => {
  const { keys } = useParams();
  const findFood = demoData.filter((find) => find.keys === keys);
  const [findFoodDetails, setFindFood] = useState(findFood);
  const [cart,setCart] = useState([]);
  /**
   * {findFood} finds data accord to {title} route param from demoData or database demo
   * !!Needs to improve!!
   */
  const notify = () => toast("Item added to cart!");
  useEffect(()=>{
//useEffect here to load data from local storage
const getSavedDataFromLS = getDatabaseCart();
const itemKeys = Object.keys(getSavedDataFromLS);
//retrive ls data key and match with demoData key
//find all matches and get data
const cartProducts = itemKeys.map((key) => {
  const product = demoData.find((fd) => fd.keys === key);
  // console.log(product)
  product.quantity = getSavedDataFromLS[key];
  return product;
});
setCart(cartProducts);
  },[])
/**
 * handleAddToCart = (foodItem) - to send clicked item to cart
 */
const handleAddToCart = (foodItem) => {
  const productToBeAdded = foodItem.keys;
  const sameProduct = cart.find(item=>item.keys===productToBeAdded);
  let count = 1;
  let newCart;
  if(sameProduct){
    notify();
    count = sameProduct.quantity+1;
    sameProduct.quantity=count;
    const others = cart.filter ((item=>item.keys!==productToBeAdded));
    newCart=[...others,sameProduct];
  }else{
    notify();
    foodItem.quantity = 1;
    newCart=[...cart,foodItem];
  }
  setCart(newCart)
  addToDatabaseCart(foodItem.keys,count);
 };
  return (
    <>
    <Header/>
    <br/>
    <Container>
   <div className="py-5">
      <div className="food-details-container float-left">
      {
        findFoodDetails.map((details) => (
          <FoodDetailsCard
            key={details.keys}
            handleAddToCart={handleAddToCart}
            findFoodDetails={details}
          ></FoodDetailsCard>
        ))
        /**
         * findFoodDetails.map - to find all details of {findFood}
         * sends data to 'FoodDetailsCard' component
         */
      }
    </div>
   <div style={{display:'none'}}>
   <div className="cart-hidden-container float-right">
        <CartHidden cart={cart}></CartHidden>
    </div>
   </div>
   </div>
   </Container>
   </>
  );
};

export default FoodDetails;
