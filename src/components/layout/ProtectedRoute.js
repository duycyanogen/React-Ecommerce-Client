import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const userInfo = useSelector(state => state.user.userInfo);

    return userInfo ? <Outlet/> : <Navigate to='/login'/>
}
export default ProtectedRoute;