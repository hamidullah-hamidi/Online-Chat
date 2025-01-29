import './Sidebar.css';
import Login from '../../pages/Login';
import { useCreateAccount } from '../../contexts/CreateUser';
import AccountList from './accountList.jsx/AccountList';
import Footer from './Footer';

//sidebar section
const Sidebar = () => {
  const { accounts } = useCreateAccount();

  return (
    <>
      <div className='sidebar'>
        <h2>Chat-App</h2>
        <ul className='chat-list'>
          {accounts.map((account) => {
            return <AccountList account={account} key={account.email} />;
          })}
        </ul>
        <Login />
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
