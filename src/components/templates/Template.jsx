import React from 'react'
import Navbar from '../molecules/navbar_section/Navbar'
import First_section from '../molecules/first_section/First_section'
import styles from './template.module.css'
import Second_section from '../molecules/second_section/Second_section'
import Third_section from '../molecules/third_section/Third_section'
import Training_programs from '../molecules/fourth_section/Training_programs'
import Professional_traineers from '../molecules/fifth_section/Professional_traineers'
import Packages from '../molecules/sixth_section/Packages'
import Review from '../molecules/seventh_section/Review'
import Message from '../molecules/Eighth_section/Message'
import Footer from '../molecules/ninth_section/Footer'

const Template = () => {
    return (
        < div className={styles.template_container}>
            <Navbar />

            <First_section />
            <Second_section/>
            <Third_section/>
            <Training_programs/>
            <Professional_traineers/>
            <Packages/>
            <Review/>
            <Message/>
            <Footer/>



        </div>
    )
}

export default Template