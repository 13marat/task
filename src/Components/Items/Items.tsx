import React, { useEffect } from 'react';
import Item from '../Item/Item';
import { ProductsType, StateType } from '../../types/Types';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from '../../Hooks/useAxios';
import Loading from '../Loading';
import Error from '../Error/Error';
import { setError } from '../../Slices/ErrorSlice';

const Items = () => {
  const error = useSelector((state: StateType) => state.error);
  const { fetchProducts } = useAxios();
  const { initialProducts, loading } = useSelector((state: StateType) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    return () => {
      dispatch(setError(''));
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Cart />
          {!error && initialProducts.map((item: ProductsType) => <Item key={item.id} item={item} />)}
        </div>
      )}
      {error && <Error />}
    </>
  );
};
export default Items;
