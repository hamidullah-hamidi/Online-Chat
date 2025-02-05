import Sidebar from "../ui/SideBar";
import MessageWindow from '../ui/MessageWindow'
import './appLoyout.css'
import {getUsers} from "../services/apiUsers";
import {getChats} from "../services/apiChats";
import { useEffect } from "react";

export default function AppLoyout(){

    return <div className="appLayout">
        <Sidebar />
        <MessageWindow />
    </div>
}