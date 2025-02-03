import Sidebar from "../ui/sidebar/SideBar";
import MessageWindow from '../ui/MessageWindow/MessageWindow'
import './appLoyout.css'
export default function AppLoyout(){
    return <div className="appLayout">
        <Sidebar />
        <MessageWindow />
    </div>
}