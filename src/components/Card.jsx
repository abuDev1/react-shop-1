import React from 'react'
import { Button } from './Button'




export const Card = ({product}) => {
  return (
    <div className="card" >
      <div class="card-image">
        <img src={product.image} alt="X" />
      </div>
      <div class="card-info">
        <div class="card-name">{product.name}</div>
        <div class="card-price">{product.price}</div>
        <Button product={product}/>
        </div>
    </div>
  );
};

