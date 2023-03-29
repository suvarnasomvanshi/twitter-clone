import React from 'react'
import style from './RightSection.module.css'
import RightSecDiv from '../../Component/RightSecDIv/RightSecDiv'
import SearchBar from '../../Component/SearchBar/SearchBar'
function RightSection() {
  return (
    <div>
     
      <SearchBar/>
      <div className={style.RigtDiv}>
      <RightSecDiv/></div>
    </div>
  )
}

export default RightSection
