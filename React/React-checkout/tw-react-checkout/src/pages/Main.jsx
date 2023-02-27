import Header from "../components/Header";
import { Button } from "react-bootstrap";
import ShowButton from "../components/ShowButton";
import CardTotal from "../components/CardTotal";
import { useState } from "react";
import AddProducts from "../components/AddProducts";

const Main = () => {
  const [showAddProduct, setshowAddProduct] = useState(false);

  const hideShowFunc = () => {
    setshowAddProduct(!showAddProduct);
    console.log(showAddProduct);
  };

  return (
    <div>
      <Header />
      <ShowButton hideShowFunc={hideShowFunc} showAddProduct={showAddProduct} />
      {showAddProduct ? (
        <div className="d-flex justify-content-center">
          <AddProducts /> <CardTotal />{" "}
        </div>
      ) : (
        <CardTotal />
      )}
    </div>
  );
};

export default Main;
