import Sidebar from "../ui/SideBar";
import MessageWindow from '../ui/MessageWindow'
import './appLoyout.css'

export default function AppLoyout(){
    return <div className="appLayout">
        <Sidebar />
        <MessageWindow />
    </div>
}