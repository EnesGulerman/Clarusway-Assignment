import Header from "../components/Header";
import { Button } from "react-bootstrap";
import ShowButton from "../components/ShowButton";
import CartTotal from "../components/CartTotal";
import { useState } from "react";

const Main = () => {

const [showAddProduct, setshowAddProduct]= useState(false)

const hideShowFunc= () =>{ 
    setshowAddProduct(!showAddProduct)
}

  return (
    <div>
      <Header />
      <ShowButton hideShowFunc = {hideShowFunc} />
      <CartTotal />
    </div>
  );
};

export default Main;
