// UserContext.js
import{ createContext, useContext, useState } from 'react';

export const UserContext = createContext();

const CreateUserPorvider = ({ children }) => {
    const [acounts, setAcounts] = useState([]); 
    return (
        <UserContext.Provider value={{ acounts, setAcounts }}>
            {children}
        </UserContext.Provider>
    );
};

function useCreateAcount(){
    //obect that stored all the value
    const context = useContext(UserContext)
    if(context === undefined) throw new Error('context used outside the context parrent')
        return context
}
export {useCreateAcount,CreateUserPorvider}