import React from 'react';
import ProductItem from '../components/ProductItem'; 
import productsData from '../assets/products.json';

const Products = () => {
  const lim= productsData.length < 3 ? productsData.length : 3
  productsData=productsData.splice(0,lim)
  return (
    <section className="products" id="products">
      <div data-aos="slide-right">
        <h1 className="heading">our <span>products</span></h1>
      </div>
      <div className="box-container" data-aos="slide-up">
        {productsData.map((product, index) => (
          <ProductItem
            key={index}
            title={product.title}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            amount={product.amount}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
