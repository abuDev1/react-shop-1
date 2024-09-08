import React from 'react'
import CheckoutImg from '../Checkout/shop.svg'


export const Checkout = (props) => {
  const boughtCount = props.products.map((product) => {
    product.bought})
  console.log(boughtCount);
  return (
    <div className='checkout'>
      <img src={CheckoutImg} alt="" />
      <span className='counter'></span>
    </div>
  )
}
