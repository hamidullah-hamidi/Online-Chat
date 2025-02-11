import { useState } from 'react';
import './UserList.css'

const AccountList = ({account}) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(pre=>!pre);
  };

  return (
    <div className='list-data' onClick={handleButtonClick}>
    <img  src="https://bbglrqpjxqaptcbbzpme.supabase.co/storage/v1/object/public/users-images//photo_2025-01-29_23-29-32.jpg" alt="no-img" />
    <li>{account.name}-{account.lastName}</li>


    <div style={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {showDiv && (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'lightblue',
    border: '1px solid blue',
    borderRadius: '5px'
  }}>
  </div>)}
  </div>

    </div>
  );
};

export default AccountList;
