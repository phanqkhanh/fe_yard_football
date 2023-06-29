import React from 'react';
import { useState, createContext } from 'react';

const DataContext = createContext();

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const store = {
        loading,
        setLoading,
    };

    return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};

export { ContextProvider, DataContext };
