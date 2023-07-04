import React from 'react'
import styles from './review.module.css'
import { review_comments } from '../../atoms/arrays/Images_array'
import { useState } from 'react'
import {RiStarSFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'

const Review = () => {
    const [arrays,setArrays] = useState(review_comments)

    const handleClick=()=>{
        const dummy = [...arrays]
        const [remove]=dummy.splice(0,1)
        
        dummy.push(remove)
        
        setArrays(dummy)
    }
  return (
    <div className={styles.review_container}>
        <h2 className={styles.heading2}>What Our Client Say About Us</h2>
        <div className={styles.review}>
          {
            arrays.map(ele=>{
                return(
                    
                    <div className={styles.inner_review}>
                        <div className={styles.thoughts}>
                       <img src={ele.img} alt="images" className={styles.images} />
                       <div className={styles.description}>
                       <h2 className={styles.heading_name}>{ele.name}</h2>
                       <h4 className={styles.heading_profession}>{ele.profession}</h4>
                       
                       <div
                       className={styles.stars_section}>{ele.stars}</div>

                      <div className={styles.para} > {ele.thoughts}</div>
                       <div className={styles.links}>
                        <a href="https://www.facebook.com" target='/' className={styles.anchor_links}><BiLogoFacebook/></a>
                        <a href="https://www.instagram.com" target='/' className={styles.anchor_links}><AiOutlineInstagram/></a>
                        <a href="https://www.twitter.com" target='/' className={styles.anchor_links}><AiOutlineTwitter/></a>
                       </div>
                       </div>
                       </div>
                    </div>
                )
            })
          }
          
        </div>
        <button className={styles.btn} onClick={handleClick} >Next</button>
    </div>
  )
}

export default Review