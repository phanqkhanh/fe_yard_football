import React, { useEffect, useRef } from 'react';
import {
    MdImportantDevices,
    // MdCardGiftcard,
    MdLoyalty,
} from 'react-icons/md';
import NotificationSystem from 'react-notification-system';
import { NOTIFICATION_SYSTEM_STYLE } from '../../utils/constants';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/header';
import Footer from './Footer/footer';
import Content from './Content';

const MainLayout = ({ children, breakpoint }) => {
    const notificationSystem = useRef(null);

    const isSidebarOpen = () => document.querySelector('.cr-sidebar').classList.contains('cr-sidebar--open');

    const handleContentClick = () => {
        if (isSidebarOpen() && (breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md')) {
            openSidebar('close');
        }
    };

    const checkBreakpoint = (breakpoint) => {
        switch (breakpoint) {
            case 'xs':
            case 'sm':
            case 'md':
                return openSidebar('close');

            case 'lg':
            case 'xl':
            default:
                return openSidebar('open');
        }
    };

    const openSidebar = (openOrClose) => {
        const sidebar = document.querySelector('.cr-sidebar');
        if (openOrClose === 'open') {
            sidebar.classList.add('cr-sidebar--open');
        } else {
            sidebar.classList.remove('cr-sidebar--open');
        }
    };

    useEffect(() => {
        checkBreakpoint(breakpoint);

        setTimeout(() => {
            if (!notificationSystem.current) {
                return;
            }

            notificationSystem.current.addNotification({
                title: <MdImportantDevices />,
                message: 'Welcome to Reduction Admin!',
                level: 'info',
            });
        }, 1500);

        setTimeout(() => {
            if (!notificationSystem.current) {
                return;
            }

            notificationSystem.current.addNotification({
                title: <MdLoyalty />,
                message: 'Reduction is a carefully designed template powered by React and Bootstrap4!',
                level: 'info',
            });
        }, 2500);
    }, [breakpoint]);

    return (
        <main className="cr-app bg-light">
            <Sidebar />
            <Content fluid onClick={handleContentClick}>
                <Header />
                {children}
                <Footer />
            </Content>

            <NotificationSystem dismissible={false} ref={notificationSystem} style={NOTIFICATION_SYSTEM_STYLE} />
        </main>
    );
};

export default MainLayout;
