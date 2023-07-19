import React from 'react'
import { useEffect } from "react"
import { useAxios } from "./Hooks/useAxios"
import { useSelector } from "react-redux"
import { StateType } from './types/Types'

export const useApp = () => {
    const error = useSelector((state: StateType) => state.error)
    const {current} = useSelector((state: StateType) => state.current)
    const currentUser = !!Object.keys(current).length
    const {fetchUsers} = useAxios()
    
    useEffect(()=> {fetchUsers()}, [])

    return {current, currentUser}
}