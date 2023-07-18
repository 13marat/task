import { useDispatch } from "react-redux";
import { updateCart, removeItem } from "../../Slices/cartSlice";
import { CartFunctionsArguments, ProductsType } from "../../types/Types";

export const useCart = () => {
  const dispatch = useDispatch();

  function editCart(
    product: ProductsType,
    functional?: CartFunctionsArguments
  ) {
    if (product && !functional) {
      dispatch(removeItem(product));
    } else if (product && functional === CartFunctionsArguments.PlusCount) {
      dispatch(
        updateCart({
          ...product,
          count: product.count + 1,
          price: product.price + product.price / product.count,
        })
      );
    } else if (functional === CartFunctionsArguments.MinusCount) {
      dispatch(
        updateCart({
          ...product,
          count: product.count - 1,
          price: product.price - product.price / product.count,
        })
      );
      product.count < 2 && dispatch(removeItem(product));
    }
  }

  return { editCart };
};
