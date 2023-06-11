import axios from 'axios'
import React, { useEffect } from 'react'
import { apis } from '../../Apis/apis'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../Slices/ItemsSlice'
import Item from '../Item/Item'
import { getProductsData } from '../../helpers/getProductsData'
import { filterProductsData } from '../../helpers/filterProductsData'
import { productsType } from '../../types/types'

const Items = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: any) => state.items)
  
  useEffect(() => {
    const data = getProductsData(apis.products)
    data.then((response: any) => dispatch(getItems(filterProductsData(response))))
  
  }, [])
  

  return (
    <div>
      {
        items.map((item: productsType) => <Item key={item.id} props = {item}/>)
      }
    </div>
  )
}

export default Items




