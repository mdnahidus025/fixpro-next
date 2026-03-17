"use client";

import React from 'react';
import useFixproContext from '../context/useFixproContext';
import CustomCursor from '../elements/CustomCursor';
import SideBar from '../elements/SideBar';
import MobileNav from '../elements/MobileNav';
import ChatPopup from '../elements/ChatPopup';
import SearchProp from '../elements/SearchProp';
import ScrollToTop from '../elements/ScrollToTop';
import VideoPopup from '../elements/VideoPopup';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isMobileManu, isSearch, showVideoPopup } = useFixproContext();
    return (
        <div className={`custom-cursor ${isMobileManu ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
            <CustomCursor enabled />
            {children}
            <SideBar />
            <MobileNav />
            <ChatPopup />
            <SearchProp />
            <ScrollToTop />
            {showVideoPopup && <VideoPopup />}
        </div>
    );
};

export default CustomLayout;