import React from 'react'

export const Button = ({product, setBought, products}) => {
    if (product.bought === true) {
      return (
        <div className='card-button'>
        <button className='btn_dis' onClick={() => setBought(product.id)}>Добавлено в корзину</button>
    </div>
      )
    }
    return (
      <div className='card-button'>
          <button className='btn' onClick={() => setBought(product.id)}>Добавить в корзину</button>
      </div>
    )
  }
