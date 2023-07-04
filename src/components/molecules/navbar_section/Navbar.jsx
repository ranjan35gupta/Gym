import React from 'react'
import styles from  './navbar.module.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  function handleLogout(){
    localStorage.setItem('isUser',JSON.stringify(false))
    navigate('/login')
  }
  return (
    
    <div className={styles.navbar_container}>
        <Link   to='/' className={styles.links1}>  <h2 className={styles.logo}>GYM</h2></Link>
          <ul className={styles.navbar_list}>
          <Link to='/'  className={styles.links1}>  <li className={styles.list}>Home</li></Link>
          <Link to='/aboutus' className={styles.links1}>  <li className={styles.list}>About Us</li></Link>
       {/* <Link to='pricing' className={styles.links1}>     <li className={styles.list}>Pricing</li></Link> */}
           <HashLink to='#pricing' smooth  className={styles.links1}  >      <li className={styles.list}>Pricing</li></HashLink>
            <Link to='/blogs' className={styles.links1}  ><li className={styles.list}>Blogs</li></Link>
          </ul>
          <div className={styles.btn_container}>
          <Link to='/signup' className={styles.link_style}>      <button className={styles.btn}>Join Us</button></Link>
          <button className={styles.btn} onClick={handleLogout}>Log Out</button>
          </div>
         
          
    </div>
    
  )
}

export default Navbar