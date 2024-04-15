import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('Juan Dela Cruz');
    const [profilePic, setProfilePic] = useState(null);

    const updateUser = (updates) => {
        console.log("Received updates:", updates);
        if (updates.name !== undefined) {
            console.log("Setting name:", updates.name);
            setName(updates.name);
        }
        if (updates.profilePic !== undefined) {
            setProfilePic(updates.profilePic);
        }
    };

    return (
        <UserContext.Provider value={{ name, setName, profilePic, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
