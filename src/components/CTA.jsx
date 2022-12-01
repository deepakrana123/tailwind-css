import React from 'react'
import Button from './Button';
import styles from '../style'
const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow-20px`}>
      <div className="flex-1 flex-col flex">
        <h2 className={styles.heading}>Lets try out our service</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you needs to grow your bussines in everywhere in the planet </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mr-0 mr-10`}>
        <Button/>
        </div>
    </section>
  )
}

export default CTA