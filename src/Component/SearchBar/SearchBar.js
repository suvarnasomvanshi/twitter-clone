import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import style from './SearchBar.module.css'
// import { useState } from 'react'
function SearchBar() {
    // const[searchTerm,setSearchTerm]=useState('')  
  return (
    <div>
        <SearchIcon color="disabled" fontSize="large" className={style.SearchIcon}/>
       <input
       className={style.SearchBar}
       
       type='text'
    
      placeholder= '             Search here'
    
    //   onChange={(e)=>{
    //     setSearchTerm(e.target.value)
    //   }}
    />
    </div>
  )
}

export default SearchBar

