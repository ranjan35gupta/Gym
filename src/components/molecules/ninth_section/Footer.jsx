import React from 'react'
import styles from './footer.module.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
        <div className={styles.platform}>
            <h2 className={styles.headings2}>GYM</h2>
            <p className={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, molestias.</p>
            <div className={styles.link_container}>
                <a href="https://www.facebook.com" className={styles.links}><BiLogoFacebook/></a>
                <a href="https://www.instagram.com" className={styles.links}><AiOutlineInstagram/></a>
                <a href="https://www.twitter.com" className={styles.links}><AiOutlineTwitter/></a>
            </div>

        </div>
        <div className={styles.healthy}>
            <h3>Healthy living</h3>
            <ul className={styles.lists}>
                <li>Lorem, ipsum.</li>
                <li>lorme</li>
                <li>fresh environment</li>
                <li>Cleaness</li>
            </ul>
        </div>
        <div className={styles.services}>
            <h3>Sevices</h3>
            <ul className={styles.lists}>
                <li>Lorem, ipsum.</li>
                <li>lorme</li>
                <li>transport</li>
                <li>free wifi</li>
            </ul>
        </div>
        <div className={styles.programs}>
            <h3>Programs</h3>
            <ul className={styles.lists}>
                <li>Lorem, ipsum.</li>
                <li>lorme</li>
                <li>live mentor</li>
                <li>zooma dance</li>
            </ul>
        </div>
        
    </div>
    <h6 className={styles.heading6}><p className={styles.footer_para}>@2023 isr All rights copy reserved</p></h6>
    </div>
  )
}

export default Footer