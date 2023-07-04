import React from 'react'
import styles from './training_programs.module.css'
import array_images from '../../atoms/arrays/Images_array'
import {useState} from 'react'
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

const Training_programs = () => {
    const [array,setArray]= useState(array_images)

    const handleleft = ()=>{
        const dummyArray = [...array]
        if(dummyArray[0].id==1){
            return
        }
        else{
        let remove = dummyArray.pop()
        dummyArray.splice(0,0,remove)
        setArray(dummyArray)
        }
        
    }
    const handleRight = ()=>{
        const dummyArray = [...array]
        
   
        let [remove] = dummyArray.splice(0,1)
        console.log(dummyArray,"before")
        console.log(remove)
        dummyArray.push(remove)
        console.log(dummyArray,"after")
        setArray(dummyArray)
        

    }

  return (
    <div className={styles.training_container}>
        <h2 className={styles.headings}>Training Programs</h2>
    <div className={styles.programs_container}>
        {array.map(ele=>{
            return(
                
                <div className={styles.map_container} >
                    <img src={ele.img1} alt="images" className={styles.image_container} />
                    <h4 className={styles.heading4_container}>{ele.name}</h4>
                </div>
            )
        })}
    </div>
    <div className={styles.btn_container}>
       
            <AiFillCaretLeft onClick={handleleft} className={styles.arrow}/>
         <h6 className={styles.heading6}><p className={styles.paragraphs}>view all </p> <BsArrowRight/>      </h6>
       
          <AiFillCaretRight onClick={handleRight} className={styles.arrow}  />    
    </div>
    </div>
  )
}

export default Training_programs