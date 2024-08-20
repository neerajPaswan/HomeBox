import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { baseUrl } from '../../App';
import { Navigate } from 'react-router-dom';
import Loading from '../loading-compoent/Loading';

function ProtectedRoute({children}) {
 const [verified,setVerified] = useState(false);
 const [loading,setLoading] = useState(true);

 useEffect(()=>{

    const getVerify = async ()=>{
        try{
            await  axios.get(`${baseUrl}/auth/check`,{ withCredentials: true })
            .then(res=>{setVerified(true);})
        }catch(error){
            setVerified(false);
           alert("Please try after sometime")
        }
        setLoading(false);
    }

    getVerify();
    
},[])

if(loading){
    return <Loading/>
}
  return (
    verified?(children):<Navigate to="/sign-in"/>
  )
}

export default ProtectedRoute