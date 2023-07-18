import React from 'react'
import { useSelector } from 'react-redux'
import { CartFunctionsArguments, StateType } from '../../types/Types'
import { useCart } from './Cart.hook'
import Profile from '../Profile/Profile'
import './Cart.css'

const Cart = () => {
  const cart = useSelector((state: StateType) => state.cart)
  const {editCart} = useCart()

  return (
  <>
    <Profile/>
    <div>
      {cart.map((item) => {
        const {image, price, title, count} = item
        return(
        <div key={price + count}>
          <div>{title}</div>
          <div>{price}</div>
          <div>{count}</div>
          {/* <div><img src = {image}/></div> */}
          <button onClick={() => editCart(item, CartFunctionsArguments.MinusCount)}>Minus</button>
          <button onClick={() => editCart(item, CartFunctionsArguments.PlusCount)}>Plus</button>
          <button onClick={() => editCart(item)}>Delete</button>
        </div>
        )
      })}
    </div>
  </>
  )
}

export default Cart