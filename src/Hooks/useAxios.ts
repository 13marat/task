import axios, { AxiosError, AxiosResponse } from 'axios';
import { AxiosProduct, AxiosUser } from '../types/Types';
import { apis } from '../Apis/apis';
import { useDispatch } from 'react-redux';
import { setUsers, setUsersLoading } from '../Slices/usersSlice';
import { filterProductsData, filterUsersData } from '../helpers/helper';
import { setItems, setProductsLoading } from '../Slices/ItemsSlice';
import { setError } from '../Slices/ErrorSlice';

export const useAxios = () => {
  const dispatch = useDispatch();

  const fetchUsers = () => {
    dispatch(setError(''));
    dispatch(setUsersLoading(true));

    const result = axios
      .get(apis.users)
      .then((res: AxiosResponse<AxiosUser[]>) => dispatch(setUsers(filterUsersData(res.data))))
      .catch((err: AxiosError) => {
        dispatch(setError(err.message));
      })
      .finally(() => dispatch(setUsersLoading(false)));

    return result;
  };

  const fetchProducts = () => {
    dispatch(setError(''));
    dispatch(setProductsLoading(true));

    const result = axios
      .get(apis.products)
      .then((res: AxiosResponse<AxiosProduct[]>) => dispatch(setItems(filterProductsData(res.data))))
      .catch((err: AxiosError) => {
        dispatch(setError(err.message));
      })
      .finally(() => dispatch(setProductsLoading(false)));

    return result;
  };

  return { fetchProducts, fetchUsers };
};
