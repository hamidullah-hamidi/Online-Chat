import Sidebar from "../ui/SideBar";
import MessageWindow from '../ui/MessageWindow'
import './appLoyout.css'
import {getUsers} from "../services/apiUsers";
import {getChats} from "../services/apiChats";
import { useEffect } from "react";

export default function AppLoyout(){

   useEffect(()=>{
    getUsers().then(data=>{
        console.log(data);
    })
    getChats().then(data=>{
        console.log(data);
    })
   },[])

    return <div className="appLayout">
        <Sidebar />
        <MessageWindow />
    </div>
}