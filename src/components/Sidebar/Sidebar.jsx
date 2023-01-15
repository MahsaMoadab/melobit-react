import React from 'react';
import Logo from '../../assets/icon/logo.svg';
import HomeIcon from '../../assets/icon/home.svg';
import SearchIcon from '../../assets/icon/search.svg';
import HistoryIcon from '../../assets/icon/history.svg';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_logo">
                <img src={Logo} alt="" />
            </div>

            <div className="sidebar_menu">
                <div className="sidebar_menu_item">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        <img src={HomeIcon} alt="" />
                    </NavLink>

                </div>
                <div className="sidebar_menu_item">
                    <NavLink
                        to="search"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        <img src={SearchIcon} alt="" />
                    </NavLink>
                </div>
                {/* <div className="sidebar_menu_item">
                    <img src={HistoryIcon} alt="" />
                </div> */}
            </div>
        </div>
    )
}
