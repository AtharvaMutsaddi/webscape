import React from "react";
import ProductItem from "../components/ProductItem";
import productsData from "../assets/products.json";

const Products = ({ addToCart, limit, onlybestseller }) => {
  let bestsellers = productsData.filter((product) => product.bestseller);
  const nonBestsellers = productsData.filter((product) => !product.bestseller);
  const lim = productsData.length < limit ? productsData.length : limit;
  bestsellers = bestsellers.splice(0, lim);
  return (
    <section className="products" id="products">
      <div data-aos="slide-right">
        <h1 className="heading">
          our <span>bestsellers</span>
        </h1>
      </div>
      <div className="box-container" data-aos="slide-up">
        {bestsellers.map((product, index) => (
          <ProductItem
            key={index}
            title={product.title}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            amount={product.amount}
            addToCart={addToCart}
          />
        ))}
      </div>
      {!onlybestseller && (
        <div className="products" id="products">
          <h3 style={{"fontSize":"6rem"}}>Our Other Products</h3>
          <div className="box-container" data-aos="slide-up">
            {nonBestsellers.map((product, index) => (
              <ProductItem
                key={index}
                title={product.title}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                amount={product.amount}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
Products.defaultProps = {
  limit: 3,
  onlybestseller: true,
};
export default Products;
