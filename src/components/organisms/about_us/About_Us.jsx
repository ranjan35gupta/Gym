import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import styles from './about_us.module.css'
import About_first from '../../atoms/about_pages/first-section/About_first'
import About_nav from '../../atoms/about_pages/about_nav/About_nav'
import Second_section from '../../molecules/second_section/Second_section'
import Footer from '../../molecules/ninth_section/Footer'


const About_Us = () => {
  return (
    
    <div className={styles.about_us_container}>
    <About_nav/>
    <About_first/>
    <div className={styles.second}>
    <Second_section/>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
   
  )
}

export default About_Us