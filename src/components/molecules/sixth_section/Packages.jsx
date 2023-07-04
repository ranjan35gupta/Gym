import React from 'react'
import styles from './packages.module.css'

const Packages = () => {
    return (
        <div className={styles.package_container} id='pricing'>
            <div className={styles.special}>
                <h2 className={styles.heading2}>Our Special Packages</h2>
                <p className={styles.special_p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque consectetur minus officia aliquid laudantium aut pariatur voluptas tempore asperiores debitis, velit vel quos nisi accusantium eos perferendis nesciunt sapiente!</p>
            </div>
            <div className={styles.pricing}>
                <div className={styles.inner_pricing}>
                    <h5 className={styles.heading}>Silver</h5>
                    <p className={styles.paragraph}>&#10003; &nbsp;Unlimited Club access 24 hours</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Group Attendence</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Gym Visits</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Visit to the both complex</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Gym Right Club</p>
                    <h6 className={styles.heading}>$130/month</h6>
                    <button className={styles.btn}>Choose</button>
                </div>
                <div className={styles.inner_pricing}>
                <h5 className={styles.heading}>Gold</h5>
                    <p className={styles.paragraph}>&#10003; &nbsp;Unlimited Club access 24 hours</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Group Attendence</p>
                    <p className={styles.paragraph}> <span className={styles.spans}>&#10005;</span> &nbsp;Gym Visits</p>
                    <p className={styles.paragraph}><span className={styles.spans}>&#10005;</span> &nbsp;Visit to the both complex</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Gym Right Club</p>
                    <h6 className={styles.heading}>$110/month</h6>
                    <button className={styles.btn}>Try 1 month</button>
                </div>
                <div className={styles.inner_pricing}>
                <h5 className={styles.heading}>Premium</h5>
                    <p className={styles.paragraph}>&#10003; &nbsp;Unlimited Club access 24 hours</p>
                    <p className={styles.paragraph}>&#10003; &nbsp;Group Attendence</p>
                    <p className={styles.paragraph}><span className={styles.spans}>&#10005;</span> &nbsp;Gym Visits</p>
                    <p className={styles.paragraph}><span className={styles.spans}>&#10005;</span> &nbsp;Visit to the both complex</p>
                    <p className={styles.paragraph}><span className={styles.spans}>&#10005;</span> &nbsp;Gym Right Club</p>
                    <h6 className={styles.heading}>$80/month</h6>
                    <button className={styles.btn}>Choose</button>
                </div>
            </div>
        </div>
    )
}

export default Packages