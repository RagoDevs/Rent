'use client';

import { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import './Header.css'
import { useAuth } from '../Require/AuthProvider';
import { LogOutIcon, MenuIcon } from 'lucide-react';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    const { signout } = useAuth();
    return (
        <>
            <div className="header">
                <div className="header--left">
                    <img src="/Assets/logo.png" alt="" />
                    <h2>Rent</h2>
                </div>
                <div className="header--right">
                    <div className="lg-menu" onClick={signout}>
                        <LogOutIcon />
                        <h2>LOGOUT</h2>
                    </div>

                    {/* smaller screens */}

                    <div className="sm-menu">
                        <MenuIcon
                        className='menu-icon'
                            onClick={handleClick}
                        />
                        {isVisible ? <Sidebar /> : ''}
                    </div>
                </div>
            </div>


        </>
    )
}