import React from 'react'
import MenuItem from '../components/MenuItem'
import menuitems from '../assets/menuitems.json'
const Menu = ({addToCart}) => {
  return (
    <section class="menu" id="menu">
      <div data-aos="slide-right">
        <h1 class="heading">our <span>menu</span></h1>
      </div>
      <div class="box-container" id="menubox" data-aos="slide-up">
        {menuitems.map((item,index)=>(
          <MenuItem
          key={index}
          imageSrc={item.imageSrc}
          category={item.category}
          title={item.title}
          price={item.price}
          addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default Menu
