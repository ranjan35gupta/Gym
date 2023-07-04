import React from 'react'
import styles from './login.module.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
     const [password,setPassword]= useState()
    const handleLogin=(e)=>{
        
        e.preventDefault()

        if(!email){
            alert("please enter a mail")
            return
        }
        const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
       if (!reg.test(email)) {
      alert('Please enter a valid email');
      return;
    }
        if(!password){
            alert("please enter a password")
            return
        }
        if(!localStorage.getItem("gym_email")){
            alert("please register first")
            navigate('/signup')
            
        }
        
            const emails = [...JSON.parse(localStorage.getItem("gym_email"))]
         console.log(emails)
         const dummy = emails.filter(ele=>ele.toLowerCase()==email.toLowerCase())
         console.log(dummy)
            
            if(dummy.length!=0){
              localStorage.setItem('isUser',JSON.stringify(true))
                navigate('/')
            }
            else{
                alert("please register first")
                  navigate('/signup')
            }
    
        

    }
  return (
    <div className={styles.signup_container}>
         
         <div className={styles.form_content}>
               <h1 className={styles.heading}>Login Now</h1>
               
               <input type="email" placeholder='Email' className={styles.input2} onChange={(e)=>setEmail(e.target.value)} />
               
               <input type="password" placeholder='password' className={styles.password_security} onChange={(e)=>setPassword(e.target.value)}/>
              
               
             <button className={styles.input2_btn} onClick={handleLogin}>Login</button>
               <div className={styles.already}> Not registered? <Link to='/signup'>SignUp here</Link></div>
               <div className={styles.copyright}>Copyright @ GYM.com</div>
         </div>

        
        </div>
  )
}

export default Login