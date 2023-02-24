import ProductCard from "./ProductCard";

const CartTotal = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        <div>
          <h2>Cart Total</h2>
        </div>

        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default CartTotal
