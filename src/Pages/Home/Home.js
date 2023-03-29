import React from 'react'
import LeftSection from '../../Section/LeftSection/LeftSection'
import Style from './Home.module.css'
import MidSection from '../../Section/MidSection/MidSection'
import RightSection from '../../Section/RightSection/RightSection'

function Home() {
  return (
    <div className={Style.homeDiv}>
      <div className={Style.leftDiv}><LeftSection/></div>
    <div className={Style.midDiv}><MidSection/></div>  
      <div className={Style.rightDiv}><RightSection/></div>
      
    </div>
  )
}

export default Home
