import React from 'react'
import { setCurrentUser } from '../../Slices/currentUser'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StateType, UserEmail, UsersType } from '../../types/Types'

const useSignin = () => {
  const { initialUsers } = useSelector((state: StateType) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (userData: UserEmail) => {
    const current: UsersType = initialUsers.find((user: UsersType) => user.username === userData.username && user.email === userData.email) as UsersType
    dispatch(setCurrentUser(current))
    navigate("/items")
  }
  return { handleSubmit }
}

export default useSignin