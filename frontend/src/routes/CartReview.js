import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../components/buy/Utilities/datbaseManager";
import demoData from "../components/buy/Demodata/demo";
import CartReviewItem from "../components/buy/CartReviewItem/CartReviewItem";
import CartHidden from "../components/buy/CartHidden/CartHidden";
import { Form,Button, Container } from "react-bootstrap";
import Header from "../components/buy/Header/Header";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  const removeItem = (productKey) => {
    const newRemoveCart = cart.filter((pd) => pd.keys !== productKey);
    setCart(newRemoveCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
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
  }, []);
  return (
    <>
    <Header/>
    <br />
    <Container>
    <div className="container py-5" style={{backgroundColor:"white"}}>
      {/* <div className="float-left">
      {cart.map((pd) => (
        <CartReviewItem
          removeItem={removeItem}
          foodsToReview={pd}
        ></CartReviewItem>
      ))}
     </div>
     <div className="float-right">
       <CartHidden cart={cart}></CartHidden>
     </div> */}
      <div className="row">
        <div className="col-md-4">
          <Form>
            <Form.Group>
              <Form.Label className="my-2">Address</Form.Label>
              <Form.Control type="text" placeholder="Bhubaneswar,Odisha" />
              <Form.Label className="my-2">Phone</Form.Label>
              <Form.Control type="number" placeholder="+91" />
              <Form.Label className="my-2">Delivery Details</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button className="btn btn-danger my-3" size="lg" block>Save & Continue</Button>
          </Form>
        </div>
        <div className="col-md-5">
          {
             <div>
               <div className="">
             {cart.map((pd) => (
               <CartReviewItem
                 removeItem={removeItem}
                 foodsToReview={pd}
               ></CartReviewItem>
             ))}
            </div>
             </div>
          }
        </div>
        <div className="col-md-3">
              <CartHidden cart={cart}></CartHidden>
            </div> 
      </div>
    </div>
    </Container>
    </>
  );
};

export default CartReview;
