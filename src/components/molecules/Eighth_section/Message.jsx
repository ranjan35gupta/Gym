import React from 'react'
import styles from './message.module.css'
import img from './../../atoms/pics/mapImages.jpeg'

const Message = () => {
  function handleSubmit(){
    alert("Happy to see you soon..")
  }
  return (
    <div className={styles.message_container}>
        <h2 className={styles.headings}>Get in Touch With Us</h2>
        <div className={styles.inner_message_container}>
        <div>
            <img src={img} alt="map" className={styles.image} />

        </div>
        <div className={styles.field_container}>
            <form onSubmit={handleSubmit} action='#' >
                <div className={styles.labels}>
                    <div className={styles.label_div}>
     <label for="name">Your Name: </label>
     <input type="text" name="name" className={styles.inputs} required/>
     </div>
     <div className={styles.label_div}>
     <label for="Email">Your Email: </label>
     <input type="Email" name="Email" className={styles.inputs} required/>
     </div>
     </div>
     <div className={styles.labels}>
        <div className={styles.label_div}>
     <label for="number">Phone Number: </label>
     <input type="text" name="number" className={styles.inputs} required/>
     </div>
     <div className={styles.label_div}>
     <label for="Address">Address: </label>
     <input type="text" name="Address" className={styles.inputs} required/>
     </div>
     </div>
     <div className={styles.labels}>
     <div className={styles.sections}>
     <label for="selection">Intrested in: </label>
     <select name="selection" defaultValue="" className={styles.inputs} required>
     <option disabled></option>
        <option value="yoga">Yoga</option>
        <option value="gym">Gym</option>
        <option value="platics">Platics</option>
        <option value="swimming">Swimming</option>
     </select>
     
     
      <label for="message" className={styles.mess}>Message </label>
      <input type="text" name="message" className={styles.inputs} />
     </div>
     </div>
     
      <button type="submit" className={styles.btn}>Send Message</button>
            </form>
        </div>
        </div>
        
    </div>
  )
}

export default Message