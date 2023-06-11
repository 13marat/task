import React, { useEffect } from 'react'
import './App.css';
import Signin from './Components/Singin/Signin';
import {Routes, Route} from 'react-router-dom'
import Items from './Components/Items/Items';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { apis } from './Apis/apis';
import { getUser } from './Slices/usersSlice';
import { usersType } from './types/types';
import { getUsersData } from './helpers/getUsersData';
import { filterUsersData } from './helpers/filterUsersData';

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state.users)

  useEffect(() => {
    const data = getUsersData(apis.users)
    data.then((response: any) => dispatch(getUser(filterUsersData(response))))
  }, [])

  
  return (
    <>
    <Routes>
      <Route path='/' Component={Signin}/>
      <Route path='/items' Component={Items}/>
    </Routes>    
    </>
  )
}

export default App



