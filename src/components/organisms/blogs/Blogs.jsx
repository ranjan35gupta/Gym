import React from 'react'
import About_nav from '../../atoms/about_pages/about_nav/About_nav'
import Footer from '../../molecules/ninth_section/Footer'
import Middle_Blogs from '../../atoms/blogs_pages/Middle_Blogs'
import styles from './blogs.module.css'

const Blogs = () => {
  return (
    <div className={styles.blogs_container}>
        
        <About_nav/>
        <div className={styles.blogss}>
        <Middle_Blogs/>
        </div>
        <div className={styles.footers}>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Blogs