import './Sidebar.css';
import { useCreateAccount } from '../../contexts/CreateUser';
import AccountList from './accountList.jsx/AccountList';
import Footer from './Footer';

//sidebar section
const Sidebar = () => {
  const { accounts } = useCreateAccount();  

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
