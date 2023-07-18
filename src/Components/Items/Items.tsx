import React, { useEffect } from 'react'
import Item from '../Item/Item'
import { ProductsType, StateType } from '../../types/Types'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import { useAxios } from '../../Hooks/useAxios'
import Loading from '../Loading'

const Items = () => {
  const {fetchProducts} = useAxios()
  const {initialProducts, loading} = useSelector((state: StateType) => state.items)

  useEffect(()=> {fetchProducts()}, [])
  
  return (
    <>
      {loading ? <Loading />
        :
        <div>
          <Cart/>
          {initialProducts?.map((item: ProductsType) => <Item key={item.id} item={item} />)}
        </div>
        }
    </>
  )
}
export default Items