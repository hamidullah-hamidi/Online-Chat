import './Sidebar.css'
import Login from '../login/Login';
import { useCreateAccount } from '../../contexts/CreateUser';
import AccountList from './accountList.jsx/AccountList';

const Sidebar = () => {
  const {accounts} = useCreateAccount()

  return (
    <div className="sidebar">
      <h2>Chat-App</h2>
      <ul className='chat-list'>
       {accounts.map(account=>{
        return <AccountList account={account} key={account.email}/>
       })}
      </ul>
      <Login />
    </div>
  );
};

export default Sidebar;
