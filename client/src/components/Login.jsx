import '../styles/login.css'
import React, { useState } from 'react';
import User from './User';
function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const Data = {
          username,
          password
        };
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Data),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('Logged in successfully!');
            setUsername('');
            setPassword('');
            console.log(data.result);
            window.location.href = '/Home';
            // window.alert(`welcome ${data.result.username}`);
          }
          else{
            setMessage("Wrong password, Check Again!");
          }
        }catch (error) {
          console.log(error);
        }
      };
    return(
        <div className="login-page">
            <img src="/login_bg.jpg" alt="" />
            <div className="login-info">
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>

                <label>Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <button onClick={handleLogin}>Login / Sign Up</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}
export default Login;