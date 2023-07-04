import React from 'react'
import styles from './signup.module.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
      const navigate = useNavigate()
    const [firstname,setFirstName]= useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState()
    const [password,setPassword] = useState('')
    const [checkbox,setCheckBox] = useState("off")
    
   function handlefirstName(e){
   
    setFirstName(e.target.value)
    console.log(firstname,"jalk")
   }
   function handleLastName(e){
   
    setLastName(e.target.value)
   }
   function handleEmail(e){
   
    setEmail(e.target.value)
   }
   function handlePhone(e){
    
    setPhone(e.target.value)
   }
   function handlePassword(e){
    
    setPassword(e.target.value)
   }
   function handleCheckbox(e){
    console.log(e.target.value)
    setCheckBox(e.target.value)
   }





    const handleForm=(e)=>{
e.preventDefault()
        console.log(firstname,"ljlkk")
        console.log(lastname,"lkalkad")



        

    // Username validation
    if (!(/^[A-Za-z]+$/).test(firstname)) {
      alert("Please enter a valid firstname");
      return;
    }
    if (!(/^[A-Za-z]+$/).test(lastname)) {
      alert("Please enter a valid lastname");
      return;
    }

    // Password validation
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      alert("Please enter a valid password that must be at least 8 characters long and contain at least one uppercase, one lowercase, one digit and one special character.");
      return;
    }

  // userName validation
  

//   if (showPhone) {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }
   
    const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!reg.test(email)) {
      alert('Please enter a valid email');
      return;
    }
//check box -----------//

if(checkbox==='off'){
    alert("please check the box")
    return
}


    if(localStorage.getItem("gym_data")){
      const  data =   [...JSON.parse(localStorage.getItem("gym_data"))]
      const emails = [...JSON.parse(localStorage.getItem("gym_email"))]
       console.log(data,'dkllalyeyyey')
      localStorage.setItem("gym_data",JSON.stringify([...data,{firstname:firstname,lastname:lastname,email:email,phone:phone,password:password}]))
      localStorage.setItem("gym_email",JSON.stringify([...emails,email]))
    }
    else{
    const array = [{firstname:firstname,lastname:lastname,email:email,phone:phone,password:password}]
    localStorage.setItem("gym_data",JSON.stringify(array))
    localStorage.setItem("gym_email",JSON.stringify([email]))
}
   localStorage.setItem('isUser',JSON.stringify(true))
    

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setPhone('')
navigate('/')
    }
  return (
    <div className={styles.signup_container}>
         
         <div className={styles.form_content}>
               <h1 className={styles.heading}>Sign Up</h1>
               <div className={styles.inputs_container}>
                <input value={firstname} type="text" placeholder='First Name' className={styles.input1} onChange={handlefirstName} />
                <input value={lastname} type="text" placeholder='Last Name' className={styles.input1} onChange={handleLastName}/>
               </div>
               <input value={email} type="text" placeholder='Email' className={styles.input2} onChange={handleEmail} />
               <input type="text" value={phone} placeholder='phone number'className={styles.input2} onChange={handlePhone}/>
               <input type="text" value={password} placeholder='password' className={styles.password_security} onChange={handlePassword} />
               <input type="text"  placeholder='confirm password' className={styles.password_security} />
               <div className={styles.select_container}>
               <input type="checkbox" className={styles.para} onChange={handleCheckbox} />
               <p>I accept the Term of Use & Privacy Policy</p>
               </div>
               
             <button className={styles.input2_btn} onClick={handleForm}>Sign Up</button>  
               <div className={styles.already}> Already have an account? <Link to='/login'>Login here</Link></div>
               <div className={styles.copyright}>Copyright @ GYM.com</div>
         </div>

        
        </div>
  )
}

export default SignUp

