import React from 'react'
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import style from "./Login.module.css"
import Buttons from '../../Atom/Button/Buttons';

import Input from '../../Atom/Input/Input';
import {FcGoogle} from "react-icons/fc"
import {Link} from "react-router-dom" 
import Helper from '../../Helper/Helper';
import {BsApple} from "react-icons/bs"
export default function Login() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    
      <Dialog
        
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
       <div className={style.maincontainer}>
          <TwitterIcon style={{color:"#00acee",marginTop:"1rem",fontSize:"xx-large"}}/>
          <h2>Sign in to twitter</h2>
        

        <DialogContent className={style.btnclass}>
          
            <Buttons
              className={style.btn}
            //   image={<img style={{width:"31px"}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZUMyUgWZ--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/am6lv2x37bole6x4poz3.jpg"/>}
             image={ <FcGoogle />}
              Sign="Sign in with Google"
            />
          
            <Buttons

              className={style.applebtn}
              logo={<BsApple/>}
              Sign="Sign in with Apple"
            />
            
            <Input  className={style.inputs} text="Phone,name or Email"/>
           
            <Link to={"/password"}> <Buttons
              className={style.nxtbtn}
              Sign="Next"
            /></Link>
            
            <Buttons
              className={style.btn}
              Sign="Forgot password?"
            />
           <p> Don't have an account?<Link to={"/signup"}> Sign up</Link></p>
        </DialogContent>
        </div>
      </Dialog>
   
  );
}

