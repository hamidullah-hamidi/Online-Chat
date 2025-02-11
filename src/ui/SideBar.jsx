import './Sidebar.css';
import UserList from './UserList';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { getUsers } from '../services/apiUsers';


const Sidebar = () => {
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
            return <UserList account={account} key={account.id} />;
          })}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
