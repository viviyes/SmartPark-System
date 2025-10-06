import axios,{AxiosInstance,InternalAxiosRequestConfig,AxiosResponse} from "axios";
import { message } from "antd";
import { store } from "../../store";
const http:AxiosInstance=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    timeout:5000
})

//request interceptor
http.interceptors.request.use((config:InternalAxiosRequestConfig)=>{    
    const {token}=store.getState().authSlice
    if(token){
        //Authorization is used to carry authentication information
        //Bearer is a type of authentication, indicating that a token is carried after it
        config.headers['Authorization']=`Bearer ${token}`
    }
    return config
})


//response interceptor
http.interceptors.response.use((response:AxiosResponse)=>{
    const res=response.data
    if(res.code!=200){
        message.error(res.code+":"+ res.message);
        return Promise.reject(new Error(res.message))
    }
    return response.data
})

export default http





