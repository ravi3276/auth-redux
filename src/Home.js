import React from 'react'
import styles from './Home.module.css';
import {logout, selectUser} from './slice/userSlice.js';
import {increment, decrement,selectCounter} from './slice/countSlice.js';
import {useDispatch, useSelector} from 'react-redux';
function Home() {
    const user=useSelector(selectUser);
    const count=useSelector(selectCounter);
    const dispatch = useDispatch();
    const logoutBtn=()=>{
        dispatch(logout());
    }
    const increasing=()=>{
        dispatch(increment());
    }
    const decreasing=()=>{
        dispatch(decrement());
    }
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.title}>{user.name}</h3>
        <button className={styles.btn} onClick={logoutBtn}>Logout</button>
      </div>

      <div className={styles.body}>
        <h3>Welcome to Home Page</h3>
        <div className={styles.card}>
          <button className={styles.btn1} onClick={decreasing}>-</button>
          <span className={styles.span}>{count}</span>
          <button className={styles.btn1} onClick={increasing}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Home
