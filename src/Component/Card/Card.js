

import React from "react";
import didi from '../../Assets/didi.jpg';
import style from './Card.module.css'
import {CiHeart} from 'react-icons/ci'

import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet} from 'react-icons/ai'
import {MdOutlinePoll} from 'react-icons/md'
import Buttons from '../../Atom/Button/Buttons'

export default function Card({children}){
  return(
    <>
    <div className={style.mainDiv}>

    {children}
   <div className={style.div1}> <img src={didi} alt="" className={style.ChhotiDidi} /></div>
   <h3> Deepika Padukone</h3>
   <p>
   This month, its about the absolute essentials! So I’ve put together a few of my favourite essentials from my closet for you to own!

As always, proceeds go to 
@TLLLFoundation
   </p>
   <div  className={style.div2}><img src={didi} alt="" className={style.BadiDidi} /></div> 

    <div className={style.btnDiv}
    >
    <Buttons className={style.btns}
    image={<CiHeart style={{fontSize: "28px"}}/>}/>
    <Buttons className={style.btns}
    image={<FaRegComment style={{fontSize: "28px"}}/>}
    />
    <Buttons className={style.btns}
    image={<AiOutlineRetweet style={{fontSize: "28px"}}/>}/>
    <Buttons className={style.btns}
    image={<MdOutlinePoll style={{fontSize: "28px"}}/>}/>
  
    </div>
    </div>
    </>

  );
}