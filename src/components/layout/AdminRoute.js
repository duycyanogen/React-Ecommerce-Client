import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const  AdminRoute = () =>{
    const userInfo = useSelector(state => state.user.userInfo);
    return userInfo.idRole === 1 ? <Outlet/> : <Navigate to='/login'/>

}

