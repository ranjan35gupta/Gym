import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import styles from './about.module.css'
import { HashLink } from 'react-router-hash-link'
// import About_first from '../../atoms/about_pages/first-section/About_first'
// import About_nav from '../../atoms/about_pages/about_nav/About_nav'

import { useNavigate } from 'react-router-dom'

const About_nav = () => {
  const navigate = useNavigate()
  function handleLogout(){
    localStorage.setItem('isUser',JSON.stringify(false))
    navigate('/login')
  }
  return (
    <div className={styles.navbar_container}>
        <Link   to='/' className={styles.link_style}>  <h3 className={styles.logo}>GYM</h3></Link>
          <ul className={styles.navbar_list}>
          <Link to='/'  className={styles.link_style}>  <li className={styles.list}>Home</li></Link>
          <Link to='/aboutus' className={styles.link_style}>  <li className={styles.list}>About Us</li></Link>
            {/* <HashLink to='#pricing' smooth><li className={styles.list}>Pricing</li></HashLink> */}
         <Link  to='/blogs' className={styles.link_style} >  <li className={styles.list}>Blogs</li></Link> 
          </ul>
          <div className={styles.btn_container}>
         <Link to='/signup' className={styles.link_style}>  <button className={styles.btn}>Join Us</button></Link> 
         <button className={styles.btn} onClick={handleLogout}>Log Out</button>
          </div>
         
          
    </div>
  )
}

export default About_nav