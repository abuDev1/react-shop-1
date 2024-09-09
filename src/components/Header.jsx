import React from 'react'
import { Logo } from './Logo'
import {Menu} from './Menu'
import {Checkout} from './Checkout'

export const Header = ({products}) => {
    const count = products.filter((el) => {
        return el.bought
    })
  return (
    <div className='header'>
        <Logo />
        <Menu />
        <Checkout count={count}/>
    </div>
  )
}
