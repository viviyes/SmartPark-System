import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops{
    allowed:boolean;
    redirectTo:string;
    children:any
}

function RequireAuth({allowed,redirectTo,children}:Iprops){
    const {token}= useSelector((state:any)=>state.authSlice)
    const isLogin=token?true:false;
    const navigate=useNavigate()
    useEffect(()=>{
        //allowed represents whether the current route needs to be logged in    ;   isLogin represents whether the user is logged in
        if(allowed!==isLogin){
            navigate(redirectTo)
        }
    },[allowed,isLogin,redirectTo])

    return allowed===isLogin?<>{children}</>:<></>
}

export default RequireAuth