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
             navigate("/")
            }else{
                console.log("res",res)
               setError(res.data.message[0].myError)
               alert(error)
            }
        })
    }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <label htmlFor="name" style={{ marginBottom: '10px' }}>Name: </label>
    <input type="text" name='name' id='name' style={{ marginBottom: '20px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

    <label htmlFor="email" style={{ marginBottom: '10px' }}>Email: </label>
    <input type="email" name='email' id='email' style={{ marginBottom: '20px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

    <label htmlFor="password" style={{ marginBottom: '10px' }}>Password: </label>
    <input type="password" name='password' id='password' style={{ marginBottom: '20px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button style={{ padding: '10px', backgroundColor: '#5c5a50', color: 'white', borderRadius: '5px', border: 'none' }}>Submit</button>
  </form>
</div>
  )
}

export default Register