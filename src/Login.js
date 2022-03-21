import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './Login.module.css'
import {login} from './slice/userSlice.js';

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

    const nameValidation = (fieldName, fieldValue) => {
      if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
      }
      if (/[^a-zA-Z -]/.test(fieldValue)) {
        return 'Invalid characters';
      }
      if (fieldValue.trim().length < 3) {
        return `${fieldName} should three characters`;
      }
      return null;
    };

    const emailValidation = email => {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email,
        )
      ) {
        return null;
      }
      if (email.trim() === '') {
        return 'Email is required';
      }
      return 'Please enter a valid email';
    };

    const passValidation = password => {
      if (
        /^[A-Za-z]\w{6,10}$/.test(
          password,
        )
      ) {
        return null;
      }
      if (password.trim() === '') {
        return 'password is required';
      }
      return 'Please enter a valid password';
    };

    const loginBtn=(e)=>{
        e.preventDefault();
        dispatch(login({name,email,password}))
    }
  return (
    <div className={styles.loginContainer}>
        <h1>Login Here 🔅 </h1>
        <form className={styles.loginBox}>
            <input className={styles.input} required type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} onFocus={onFocus} onBlur={onBlur}/>
            {/* {focused && nameValidation('Name', name) && <span className={styles.error}>{nameValidation('Name', name)}</span>} */}
            <input className={styles.input} required type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {/* {focused && emailValidation(email) && <span className={styles.error}>{emailValidation(email)}</span>} */}
            <input className={styles.input} required type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
            {/* <p className={styles.error}>
              {passValidation(password)}
            </p> */}
            <button className={styles.btn} onClick={loginBtn}>Login</button>
        </form>
    </div>
  )
}

export default Login