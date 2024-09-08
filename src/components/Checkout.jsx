import React from 'react'
import CheckoutImg from '../Checkout/shop.svg'


export const Checkout = ({count}) => {

  return (
    <div className='checkout'>
      <img src={CheckoutImg} alt="" />
      <span className='counter'>{count.length}</span>
    </div>
  )
}
