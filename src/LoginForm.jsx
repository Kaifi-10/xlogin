import React, { useState } from 'react'

function LoginForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validateUser, setValidateUser] = useState(false);
    const [welcome, setWelcome] = useState(false);

    const handleUserName = (e) =>{
        setUserName(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(userName === 'user' && password === 'password'){
            setValidateUser(false);
            setWelcome(true)
        }else {
            setValidateUser(true)
        }
    }



  return (
    <div>
        <h1>Login Page</h1>
        <div>
            <form onSubmit={handleSubmit}> 
                {welcome? (<span><h3>Welcome, user! </h3></span>) : (
                    <>
                    {validateUser && <h3>Invalid username or password</h3>}
                    <label>Username:</label>
                    <input type='text' placeholder='username' required value={userName} onChange={handleUserName}/><br/ >
                    <label>Password:</label>
                    <input type='password' placeholder='password' required value={password} onChange={handlePassword}/><br />
                    <button type='submit'>Submit</button>
                    
                    </>
                    
                )}
                
            </form>
        </div>
    </div>
  )
}

export default LoginForm