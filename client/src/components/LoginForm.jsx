import { useContext } from 'react'
import { MyContext } from '../context/context'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
  const {setUser} = useContext(MyContext) 

   const loginUser=(e)=>{
    e.preventDefault()
    const data={
        email:e.target.email.value,
        password:e.target.password.value
    }
    axios.post("http://localhost:4000/users/login",JSON.stringify(data),{headers:{"Content-Type":"application/json"}})
    .then(res=>{
        if(res.data.success){
            setUser(res.data.data)
            localStorage.setItem("token",res.headers.token)
            navigate("/movies")
        }else{
            alert(res.data.message)
           
        }
    })
   }
  return (
    <div>Login 
        <form onSubmit={loginUser}>
      <label>Email: <input type="email" name="email" /> </label><br />
      <label>Password: <input type="password" name="password" /> </label><br />
      <button>login</button>
    </form>
    </div>
  )
}

export default LoginForm