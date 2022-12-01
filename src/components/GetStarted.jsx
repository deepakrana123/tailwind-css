import React from 'react';
import styles from '../style';
import {arrowUp} from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full cursor-pointer bg-blue-gradient p-[2px]`}>
       <div className={`${styles.flexCenter} w-[100px] h-[100px] bg-primary flex-col rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] mr-2 leading-[23px">
                <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrowUp"/>
        </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px">
                <span className="text-gradient">Started</span>
                {/* <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrowUp"/> */}
                </p>
       </div>
    </div>
  )
}

export default GetStarted