import React, { useState } from 'react';
import Authmiddleware from './routes/Authmiddleware';
import { ownerRoutes, adminRoutes, staffRoutes, authRoutes } from './routes';

function App() {
    const user = localStorage.getItem('user');
    const [routes, setRoutes] = useState([]);

    return (
        <>
            {true ? (
                <Authmiddleware user={user} listRoutes={[...authRoutes, ...ownerRoutes]} />
            ) : (
                <Authmiddleware user={user} listRoutes={[...authRoutes]} />
            )}
        </>
    );
}

export default App;
