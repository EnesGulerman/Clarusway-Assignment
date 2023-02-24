import Header from "../components/Header";
import { Button } from "react-bootstrap";
import ShowButton from "../components/ShowButton";
import CartTotal from "../components/CartTotal";
import { useState } from "react";
import AddProducts from "../components/AddProducts";

const Main = () => {

const [showAddProduct, setshowAddProduct]= useState(false)

const hideShowFunc= () =>{ 
    setshowAddProduct(!showAddProduct)
    console.log(showAddProduct);
}

  return (
    <div>
      <Header />
      <ShowButton hideShowFunc = {hideShowFunc} showAddProduct={showAddProduct} />
      <CartTotal />
      {
        showAddProduct ? <AddProducts /> : null
      }
      
    </div>
  );
};

export default Main;
