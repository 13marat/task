import React from 'react'
import axios, { AxiosResponse } from "axios";
import { AxiosProduct, AxiosUser } from "../types/Types";
import { apis } from "../Apis/apis";
import { useDispatch } from "react-redux";
import { setUsers, setUsersError, setUsersLoading } from "../Slices/usersSlice";
import { filterProductsData, filterUsersData } from "../helpers/helper";
import { setItems, setProductsError, setProductsLoading } from "../Slices/ItemsSlice";

export const useAxios = () => {
  const dispatch = useDispatch()

  const fetchUsers = async () => {
    dispatch(setUsersLoading(true))
    const result: AxiosResponse<AxiosUser[]> = await axios.get(apis.users)
    try{
      dispatch(setUsers(filterUsersData(result.data)))
      //TODO: any
    }catch(error: any){
      dispatch(setUsersError(true))
    }finally{
      dispatch(setUsersLoading(false))
    }
    return result
  }

  const fetchProducts = async () => {
    dispatch(setProductsLoading(true))

    const result: AxiosResponse<AxiosProduct[]> = await axios.get(apis.products)
    try{
      dispatch(setItems(filterProductsData(result.data)))
      //TODO: any
    }catch(error: any){
      dispatch(setProductsError(true))
    }finally{
      dispatch(setProductsLoading(false))
    }
    return result
  }
  return {fetchProducts, fetchUsers};
};