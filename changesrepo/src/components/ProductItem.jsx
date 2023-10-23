import React from 'react';

const ProductItem = ({ title, name, imageUrl, price, amount,addToCart}) => {
  const item={
    imageSrc:imageUrl,
    price: price
  }
  const handleAddToCart = () => {
    addToCart(item);
  };
  return (
    <div className="box">
      <div className="box-head">
        <span className="title">{title}</span>
        <a href="#" className="name">{name}</a>
      </div>
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="box-bottom">
        <div className="info">
          <b className="price">{price}</b>
          <span className="amount">{amount}</span>
        </div>
        <div className="product-btn">
          <button className='btn ordernowbtn' onClick={handleAddToCart}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
