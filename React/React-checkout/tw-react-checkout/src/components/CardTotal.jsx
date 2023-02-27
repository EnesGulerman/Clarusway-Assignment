import ProductCard from "./ProductCard";

const CardTotal = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        <div>
          <h2>Card Total</h2>
        </div>

        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default CardTotal
