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
      console.log("here res",res)
        if(res.data.success){
          localStorage.setItem("token",res.headers.token)
            setUser(res.data.data)
            console.log(res.headers.token)
           
            navigate("/movies")
        }else{
            alert(res.data.message)
           
        }
    })
   }
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      borderRadius: '0.5rem',
      width:"60%"
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Login</h2>
      <form onSubmit={loginUser} style={{ width: '60%' }}>
        <label style={{ marginBottom: '0.5rem' }}>Email:</label>
        <input type="email" name="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem' }} />
        <label style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>Password:</label>
        <input type="password" name="password" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem' }} />
        <button style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '0.3rem' }}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm