import React from 'react'
import styles from './middle.module.css'
import { blogs_data } from '../arrays/Images_array'

const Middle_Blogs = () => {
  return (
    <div  className={styles.middle_container}  >

        {
            blogs_data.map(ele=>{
                return(
                    <div className={styles.container}>
                        <img src={ele.img} alt="img" className={styles.image_container} />
                      <div className={styles.name}>  {ele.name}</div>
                      <div className={styles.prof}>{ele.profession}</div>
                       <div className={styles.thoughts}> {ele.thoughts}</div>
                       <div className={styles.stars}>{ele.stars}</div> 
                    </div>
                )
            })
        }
        </div>
  )
}

export default Middle_Blogs