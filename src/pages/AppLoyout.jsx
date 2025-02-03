import Sidebar from "../ui/sidebar/SideBar";
import MessageWindow from '../ui/MessageWindow/MessageWindow'
import './appLoyout.css'
import getUsers from "../services/apiUsers";
import { useEffect } from "react";
export default function AppLoyout(){

   useEffect(()=>{
    getUsers().then(data=>{
        console.log(data);
    })
   },[])

    return <div className="appLayout">
        <Sidebar />
        <MessageWindow />
    </div>
}