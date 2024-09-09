import React, { useState } from 'react'
import { Card } from './Card'


export const Content = ({products, setBought}) => {

 
  return (
    <div className='content'>
    {products.map((product) => <Card product={product} key={product.id} setBought={setBought} products={products}/>)}
    </div>
  )
}
