import './UserList.css'

const AccountList = ({account}) => {

  return (
    <div className='list-data'>
    <img src="https://bbglrqpjxqaptcbbzpme.supabase.co/storage/v1/object/public/users-images//photo_2025-01-29_23-29-32.jpg" alt="" />
    <li>{account.name}-{account.lastName}</li>
    </div>
  );
};

export default AccountList;
