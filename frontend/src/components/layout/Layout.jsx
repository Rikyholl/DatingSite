import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className='layout'>
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;