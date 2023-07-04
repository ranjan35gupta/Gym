import React from 'react'
import Template from '../templates/Template'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About_Us from '../organisms/about_us/About_Us'
import Blogs from '../organisms/blogs/Blogs'
import Packages from '../molecules/sixth_section/Packages'
import SignUp from '../organisms/join_us/signup/SignUp'
import styles from './home.module.css'
import Login from '../organisms/join_us/Login/Login'
import Private_routing from '../private_routing/Private_routing'
const Home = () => {
  return (
    <div className={styles.home_container}>
<BrowserRouter>
<Routes>
  <Route path='/'         element={
            <Private_routing>
              <Template />
            </Private_routing>
          }/>
  <Route path='/aboutus' element={<About_Us/>}  />
  <Route path='/blogs' element={<Blogs/>}  />
  {/* <Route path='pricing' element={<Packages/>}/> */}
  <Route path ='/signup' element={<SignUp/>}/>
  <Route path='/login'  element={<Login/>}   />
</Routes>

</BrowserRouter>


    </div>
  )
}

export default Home