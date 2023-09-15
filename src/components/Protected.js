import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const Protected = ({Component}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        
        const email = localStorage.getItem("email")
        const password = localStorage.getItem("password");
        if(!email && !password){
            navigate("/")
        }

    },[])
  return (

    <Outlet/>
  )
}
