import React from 'react'
import styles from './about_first.module.css'
import img1 from './../../../atoms/pics/about_first.avif'
import img2 from './../../../atoms/pics/about_second.jpeg'

const About_first = () => {
    return (
        <div className={styles.about_first_container}>
            <div className={styles.images}>
                <img src={img1} alt="image" className={styles.img1} />
                <img src={img2} alt="image" className={styles.img2} />
            </div>
            <div className={styles.description}>
                <h5 className={styles.heading}>Who we are</h5>
                <h4 className={styles.heading4}>we will give you strength and Health</h4>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolorum id, ratione enim fugiat eius laboriosam nam, animi sed voluptas veniam optio aliquam magni consectetur neque nemo error. Itaque, repellat.</p>
                     <button className={styles.btn}>Join Now</button>
            </div>
        </div>
    )
}

export default About_first