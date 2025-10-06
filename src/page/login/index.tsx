import logo from "../../assets/logo.png"
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/loginbg.jpg"
import "./index.scss"
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined  } from '@ant-design/icons';
import { login } from "../../api/users";
import { setToken } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [form]=Form.useForm()
    const [loading,setLoading]=useState<boolean>(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handleLogin(){
        form.validateFields().then(async (res)=>{
            setLoading(true)
            const {data:{token,username,btnAuth}}=await login(res);
            setLoading(false)
            dispatch(setToken(token))
            sessionStorage.setItem("username",username)
            sessionStorage.setItem("btnAuth",JSON.stringify(btnAuth))
            navigate("/",{replace:true})
        }).catch((err)=>{
            setLoading(false)
            console.log(err)
        })
    }

    // quick login function - use preset account password to login
    async function handleQuickLogin(username: string, password: string){
        try {
            setLoading(true)
            const {data:{token,username: name,btnAuth}}=await login({username, password});
            dispatch(setToken(token))
            sessionStorage.setItem("username",name)
            sessionStorage.setItem("btnAuth",JSON.stringify(btnAuth))
            navigate("/",{replace:true})
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return <div className="login" style={{ backgroundImage: `url(${bg})` }}>
        <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
            <div className="part">
                <div className="title">
                    <div className="logo">
                        <img src={logo} width={100} />
                    </div>
                    <h1>SmartPark System</h1>
                </div>
                <Form   
                    form={form}
                >
                    <Form.Item                      
                        name="username"
                        rules={[
                            { required: true, message: 'username can not be empty' },                           
                            { pattern:/^\w{4,8}$/,message:"username must be 4-8 digits or letters"},
                        ]}
                    >
                        <Input placeholder="username" prefix={<UserOutlined/>}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'password can not be empty' }]}
                    >
                        <Input.Password placeholder="password" prefix={<LockOutlined/>}/>
                    </Form.Item>
                    <Form.Item >
                        <Button 
                            type="primary" 
                            style={{width:"100%"}}
                            onClick={handleLogin}
                            loading={loading}
                        >
                            login
                        </Button>
                        <Button 
                            type="primary" 
                            style={{width:"100% ", marginBottom:"10px",marginTop:"10px"}}
                            onClick={() => handleQuickLogin('admin', 'admin123123')}
                            loading={loading}
                        >
                            Browse as Admin
                        </Button>
                        <Button 
                            type="primary" 
                            style={{width:"100%", marginBottom:"10px"}}
                            onClick={() => handleQuickLogin('manager', 'manager123123')}
                            loading={loading}
                        >
                            Browse as manager
                        </Button>
                        <Button 
                            type="primary" 
                            style={{width:"100%"}}
                            onClick={() => handleQuickLogin('user', 'user123123')}
                            loading={loading}
                        >
                            Browse as user
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
}




export default Login