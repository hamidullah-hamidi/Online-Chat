import './Sidebar.css';
import { useCreateAccount } from '../contexts/CreateUser';
import AccountList from './UserList';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { getUsers } from '../services/apiUsers';

//sidebar section
const Sidebar = () => {
  // const { accounts } = useCreateAccount(); 
  const [accounts,setAccounts] = useState([])

useEffect(()=>{
async function getAllUsers() {
  const data = await getUsers()
  setAccounts(data)
}
getAllUsers()
},[])

  return (
    <>
      <div className='sidebar'>
        <h2>Users</h2>
        <ul className='chat-list'>
          {accounts.map((account) => {
            return <AccountList account={account} key={account.email} />;
          })}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
