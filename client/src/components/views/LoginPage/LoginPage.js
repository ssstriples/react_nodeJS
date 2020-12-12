//import { response } from 'express'; // TypeError: Cannot read property 'prototype' of undefined 발생
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log('Email', Email)
    //console.log('Password', Password)

    let body = {
      email : Email,
      password : Password
    }
  
    dispatch(loginUser(body))
    .then(response => {
      if(response.payload.loginSuccess){
        props.history.push('/') // React Page 이동
      } else {
        alert('Error')
      }
    })

  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      witdh: '100%', height: '100vh'
    }}>
      <form 
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}></input>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}></input>

        <br />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;