import { useState } from 'react';
import Model from './Model';
import './UserList.css'

const UserList = ({account}) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(pre=>!pre);
  };

  return (
    <div className='list-data' onClick={handleButtonClick}>
    <img src="https://bbglrqpjxqaptcbbzpme.supabase.co/storage/v1/object/public/users-images//photo_2025-01-29_23-29-32.jpg" alt="no-img" />
    <li>{account.name}-{account.lastName}</li>
     {
       showDiv && <Model/>
     }
    </div>
  );
};

export default UserList;
