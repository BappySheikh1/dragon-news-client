import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UseContexts';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loadding}=useContext(AuthContext)
    const location=useLocation()
    if(loadding){
        return <p><Spinner  animation="border" variant="primary" /></p>
    }
    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;