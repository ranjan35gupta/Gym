import React from 'react'
import styles from './first_section.module.css'
import image from './../../atoms/pics/body_building-removebg-preview.png'
import { useNavigate } from 'react-router-dom';
import { background_images } from '../../atoms/arrays/Images_array';
import { useState } from 'react';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
const First_section = () => {
    const [array,setArray] = useState(background_images)
    const [Value,setValue]= useState(1)
    const navigate = useNavigate()
    function handleJoin(){
          navigate('/signup')
    }
    return (
        <div className={styles.first_container} >
            <div className={styles.first_container1}>
            <div className={styles.heading}>
                <h3 className={styles.heading_3}>"Take care of your <span className={styles.h3_body}>body.</span> Its the only place you<br /> have to <span className={styles.h3_live}>live</span>."</h3>
                <button className={styles.btn} onClick={handleJoin}>Join With Us</button>
            </div>
            <div className={styles.image_container}>
                {/* <img className={styles.images} src={image} alt="gym_photo" /> */}
                {
                    array.map((ele,index)=>{
                        return(
                            <div>
                                {
                                    ele.id==Value?<img className={styles.images} src={ele.img} alt="gym_photo" /> :""
                                }
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <div className={styles.radio_btn}>
                <RadioButtonUncheckedOutlinedIcon className={styles.btn_radio} onClick={()=>setValue(1)} />
                <RadioButtonUncheckedOutlinedIcon className={styles.btn_radio} onClick={()=>setValue(2)}/>
                <RadioButtonUncheckedOutlinedIcon className={styles.btn_radio} onClick={()=>setValue(3)}/>
            </div>
            
        </div>
    )
}

export default First_section