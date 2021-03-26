import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState(
      {username:"", 
      password:"", 
      error:""});
    const history = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const change = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const login = (e) => {
      e.preventDefault();

      axios.post('http://localhost:5000/api/login', credentials)
      .then((res)=>{
        localStorage.setItem('token', res.data.payload)
        history.push('/colors');
      })
      .catch((err)=>{
        console.log(err.response)
        setCredentials({...credentials, error:"Username or Password not valid."})
      })
    }
  
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      <form onSubmit={login}>
          <input
            type="text"
            name="username"
            data-testid="username"
            value={credentials.username}
            onChange={change}
          />
          <input
            type="password"
            name="password"
            data-testid="password"
            value={credentials.password}
            onChange={change}
          />
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{credentials.error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.