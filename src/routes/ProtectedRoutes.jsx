import React, { useEffect } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../utils/helpers';

export default function ProtectedRoutes({children}) {
  const navigate = useNavigate();
  let token = getAccessToken();
    useEffect(()=>{
      
      if(!token){
        navigate({
          pathname : '/login',
          search : createSearchParams({return : window.location.href}).toString(),
        },{
          replace : true,
        });
      }

    },[token]);
    
    return (
        <>
        {children}
        </>
  )
}