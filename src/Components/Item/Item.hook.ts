import { useDispatch } from 'react-redux';
import { addCart, updateCart } from '../../Slices/cartSlice';
import { ProductsType } from '../../types/Types';

export const useItem = (cart: ProductsType[]) => {
  const dispatch = useDispatch();

  const handleClick = (arg: ProductsType) => {
    const filteredItem = cart.find((item) => item.id === arg.id) as ProductsType;
    dispatch(
      filteredItem
        ? updateCart({
            ...filteredItem,
            count: filteredItem.count + 1,
            price: filteredItem.price + arg.price,
          })
        : addCart(arg),
    );
  };
  return { handleClick };
};
