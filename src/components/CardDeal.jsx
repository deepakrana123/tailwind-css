import React from 'react';
import styles ,{layout} from '../style';
import Button from './Button';
import {card} from '../assets'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading}>Find a better card deal <br className="sm:block hidden"/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      <Button styles="mt-10"/>
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>

    </section>
  )
}

export default CardDeal