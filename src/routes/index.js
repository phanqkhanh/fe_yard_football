import Home from '../pages/Home/home.js';
import Login from '../pages/Login/login.js';

//routes cho chủ sân
const ownerRoutes = [{ path: '/', component: Home }];

//routes cho admin
const adminRoutes = [];

const staffRoutes = [];

const authRoutes = [
    { path: '/dang-nhap', component: Login, layout: null },
    // { path: '/quen-mat-khau', component: ForgotPassword },
    // { path: '/doi-mat-khau', component: UpdatePassword },
];

export { ownerRoutes, adminRoutes, staffRoutes, authRoutes };
