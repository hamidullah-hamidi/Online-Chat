import { NavLink } from "react-router";
import './intro.css'

export default function Intro(){
    return(
         <div className="intro">
          <h1>Wellcome To Chat App!</h1>
          <p>By using this app you can chat with your friends and share your toughts and ideas to your friends</p>
          <NavLink to='/login' className='links'>You have an account?</NavLink>
          <NavLink to='/login' className='links'>Create Account</NavLink>
         </div>
          )
}