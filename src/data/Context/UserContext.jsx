// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };


import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Retrieve the user from localStorage during initialization
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                return JSON.parse(savedUser);
            } catch (e) {
                console.error("Error parsing user data from localStorage", e);
                return null; // If there's an error parsing, reset to null
            }
        }
        return null;
    });

    useEffect(() => {
        // Store the user in localStorage whenever it changes
        if (user) {
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.error("Error saving user data to localStorage", e);
            }
        } else {
            localStorage.removeItem('user'); // Clear localStorage on logout
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
