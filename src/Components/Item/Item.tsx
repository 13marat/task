import React from 'react'
import { useSelector } from 'react-redux'
import { useItem } from './Item.hook'
import { ItemType, StateType } from '../../types/Types'

const Item = ({item}: ItemType) => {
  const cart = useSelector((state: StateType) => state.cart)
  const {handleClick} = useItem(cart)

  return (
    <>
      <div>
        <h5>{item.title}</h5>
        {/* <div><img src = {item.image}/></div> */}
        <p>{item.price} $</p>
      </div>
      <button onClick={() => handleClick(item)}>ADD</button>
    </>
  )
}
export default Item