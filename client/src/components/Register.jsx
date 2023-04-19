import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const submitHandler=(e)=>{
        const user={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
        }
        e.preventDefault()
        axios.post(" http://localhost:4000/users",JSON.stringify(user),{headers:{"Content-Type":"application/json"}})
        .then(res=>{
            if(res.data.success){
             navigate("/login")
            }else{
                console.log(res)
               setError(res.data.message)
            }
        })
    }
  return (
    <div>Register
        <form onSubmit={submitHandler} >
           <label htmlFor="">Name <input type="text" name='name' /></label> 
           <label htmlFor="">Email <input type="email" name='email' /></label> 
           <label htmlFor="">password <input type="password" name='password' /></label> 
           {error&& <p>{error}</p>}
           <button>Submit</button>
        </form>
    </div>
  )
}

export default Register