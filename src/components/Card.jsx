import React from 'react'
import { Button } from './Button'




export const Card = ({product}) => {
  return (
    <div className="card" >
      <div className="card-image">
        <img src={product.image} alt="X" />
      </div>
      <div className="card-info">
        <div className="card-name">{product.name}</div>
        <div className="card-price">{product.price}</div>
        <Button product={product}/>
        </div>
    </div>
  );
};

