import React from 'react'
import styles from './third_section.module.css'
import img1 from './../../atoms/pics/coach1.webp'
import img2 from './../../atoms/pics/strong-man.avif'
import img3 from './../../atoms/pics/mh-bodybuild-royalty-free-image-1576882445.jpg'

const Third_section = () => {
    return (
        <div className={styles.third_section_container}>
            
            <div className={styles.explore}>
                <div className={styles.explore_inner}>
                <h1 className={styles.explore_heading}>Explore Our Fitness Studio</h1>
               <p className={styles.explore_paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat consequuntur totam perferendis tenetur nisi numquam officiis voluptas, qui, doloremque molestias aspernatur sequi sapiente quia quae, impedit labore esse porro?</p> 
                <div className={styles.follows}>
                    <div>
                        <h1 className={styles.heading_coaches}>50+</h1>
                        <h5>Export Coaches</h5>
                    </div>
                    <div>
                        <h1>1k+</h1>
                        <h5>Members</h5>
                    </div>
                </div>
                <button className={styles.btn}>Get Start Now</button>
                </div>
                <div className={styles.pics}>
                <img src={img2} alt="gym_photo" className={styles.images} />
                
                <div className={styles.outer_circle}>
                        
                    <div className={styles.middle_circle}>
                        <div className={styles.inner_circle}>
                        
                        </div>
                    </div>
                </div>
                <img src={img3} alt="gym_photo" className={styles.images1} />
            </div>
            </div>
            
            
        </div>
    )
}

export default Third_section