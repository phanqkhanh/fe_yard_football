import React, { useEffect, useState } from 'react';
import MainLayout from './LayoutContent';

const Layout = () => {
    const [checkRender, setCheckRender] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token == null || token == 'null') {
            setCheckRender(false);
            window.location.href = '/dang-nhap';
        } else {
            setCheckRender(true);
        }
    }, []);
    return <>{checkRender ? <MainLayout /> : null}</>;
};

export default Layout;
