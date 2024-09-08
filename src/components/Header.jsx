import React from 'react'
import { Logo } from './Logo'
import {Menu} from './Menu'
import {Checkout} from './Checkout'

export const Header = (props) => {
  return (
    <div className='header'>
        <Logo />
        <Menu />
        <Checkout products={props.products}/>
    </div>
  )
}
