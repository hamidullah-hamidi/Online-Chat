
import{ createContext, useContext, useState } from 'react';

export const UserContext = createContext();

const CreateUserProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([]); 
    return (
        <UserContext.Provider value={{ accounts, setAccounts }}>
            {children}
        </UserContext.Provider>
    );
};

function useCreateAccount() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('context used outside the context parent');
    }
    return context;
}

export { useCreateAccount, CreateUserProvider };
