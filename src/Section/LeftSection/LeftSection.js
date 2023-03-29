import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import style from './LeftSection.module.css';
//import didi from '../../Assets/didi.jpg'
import Buttons from '../../Atom/Button/Buttons';
import TagSharpIcon from '@mui/icons-material/TagSharp'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import Input from '../../Atom/Input/Input'

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import  photo from '../../Assets/photo.jpg'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';
import PopOver from '../../Atom/PopOver/PopOver';
const arrs = [
  { icon: <HomeIcon style={{ fontSize: "28px" }} />, text: "Home" },
  { icon: <TagSharpIcon style={{ fontSize: "28px" }} />, text: "Explore" },
  { icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "28px" }} />, text: "Notification" },
  { icon: <EmailOutlinedIcon style={{ fontSize: "28px" }} />, text: "Message" },
  { icon: < BookmarkBorderOutlinedIcon style={{ fontSize: "28px" }} />, text: "Bookmark" },
  { icon: <FeaturedPlayListOutlinedIcon style={{ fontSize: "28px" }} />, text: "Lists" },
  { icon: <PersonOutlineOutlinedIcon style={{ fontSize: "28px" }} />, text: "Profile" },
  { icon: < MoreHorizOutlinedIcon style={{ fontSize: "28px" }} />, text: "more" },

]
function LeftSection() {
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (<>
    <div className={style.mainDiv}>
      <div className={style.btnDiv}>
        <TwitterIcon style={{ color: "#00acee", fontSize: "xx-large", marginLeft: '0.1rem' }} />

        {arrs.map(data => (
          <div className={style.iconWrapper}>
            <span className={style.icon}>{data.icon}</span><span className={style.text}>{data.text}</span>


          </div>
        ))}

        <div>
          {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}

          <Buttons
            className={style.btnT}
            Sign="Tweet"
            btnNext={handleClickOpen}
          />
          <Dialog
            open={open}
            onClose={handleClose}

          >
            <img src={photo} alt="" className={style.BigPhoto} />
           {/* <img src={didi} alt="" className={style.BadiDidi} /> */}
            <textarea className={style.ForTweet}
            placeholder='What is happening ?'
            />

            <DialogActions>

              <Buttons btnNext={handleClose} 
              Sign='Tweet'
              className={style.btnTweet}
              />
               
              
            </DialogActions>
          </Dialog>
        </div>
        <br />
        {/* <Buttons
              className={style.btnI}
              Sign="suvarna somvanshi"
              image= {<img src={photo} alt="" className={style.photo} />}
              // image= {<img src={didi} alt="" className={style.didi} />}
             logo={<MoreHorizOutlinedIcon />} 
             
             /> */}
             <PopOver/>
            
        
               


      </div>
    </div>

  </>

  )
}
export default LeftSection
