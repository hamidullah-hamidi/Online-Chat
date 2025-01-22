import './AccountList.css'

const AccountList = ({account}) => {

  return (
    <div>
        <li>{account.name}-{account.lastName}</li>
    </div>
  );
};

export default AccountList;
