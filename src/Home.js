import React from 'react'
import styles from './Home.module.css';
import {logout, selectUser} from './slice/userSlice.js';
import {useDispatch, useSelector} from 'react-redux';
function Home() {
    const user=useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutBtn=()=>{
        dispatch(logout());
    }
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.title}>{user.name}</h3>
        <button className={styles.btn} onClick={logoutBtn}>Logout</button>
      </div>
    </div>
  )
}

export default Home
