import React, { useState } from 'react'
import { Card } from './Card'


export const Content = ({products}) => {

 
  return (
    <div className='content'>
    {products.map((product) => <Card product={product} key={product.id} />)}
    </div>
  )
}
