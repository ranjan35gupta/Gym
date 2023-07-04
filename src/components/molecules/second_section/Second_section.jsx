import React from 'react'
import styles from './second_section.module.css'
import {BiRadioCircle} from 'react-icons/bi'
import vid from './../../atoms/videos/gym1.mp4'
import img1 from './../../atoms/pics/fit1-removebg-preview.png'
import vid2 from './../../atoms/videos/gym2.mp4'
import img2 from './../../atoms/pics/gym_status.jpg'
import img3 from './../../atoms/pics/videoimg.webp'


const Second_section = () => {
    return (
        <div className={styles.second_section_container}>
            <div className={styles.outer_second_container}>
                <video src={vid}  className={styles.video_container}  muted  controls poster={img3}   />

                <div className={styles.about_us}>
                    <h2 className={styles.heading}>About Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit cum veritatis, beatae sint excepturi animi perferendis unde dolorem debitis iste architecto. Unde, voluptatibus qui debitis itaque sequi praesentium ipsam recusandae animi est inventore ratione! Dolor, deserunt? Suscipit ad, adipisci doloremque quia vero fugit rem est molestias dolore facere officia, sunt magni repellat voluptates exercitationem obcaecati natus quae illum eveniet, nsequatur?</p>
                    <button className={styles.btn}>Learn More</button>
                </div>
            </div>
            <div className={styles.outer_second_container}>
                <div className={styles.why_us}>
                    <div className={styles.why_choose_inner}>
                    <h2 className={styles.heading1}>Why Choose Us?</h2>
                    <ul className={styles.list_container}>
                        <li className={styles.list_inner}>
                            <div className={styles.choice}>
                                <div><BiRadioCircle className={styles.BiRadioCircle}/></div>
                                 
                                <h4>Consultaions with Expert</h4></div>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, nobis eos. Suscipit, maiores voluptatem quis illo optio voluptates enim recusandae!</p>
                        </li>
                        <li className={styles.list_inner} >
                            <div className={styles.choice}>
                            <div><BiRadioCircle className={styles.BiRadioCircle}/></div>
                             <h4>Best workout Facilities</h4>
                            </div>
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi reiciendis eum, nam sed earum praesentium perferendis quia nemo mollitia?</p>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <video src={vid2} className={styles.video_container}  muted  controls poster={img2}/>
                </div>
            </div>
        </div>
    )
}

export default Second_section