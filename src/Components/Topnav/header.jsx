'use client';

import { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import './Header.css'
import { useAuth } from '../Require/AuthProvider';

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
                    <h2>Pango</h2>
                </div>
                <div className="header--right">
                    <div className="lg-menu" onClick={signout}>
                        <img src="/Assets/exit.png" alt="" />
                        <h2>LOGOUT</h2>
                    </div>

                    {/* smaller screens */}

                    <div className="sm-menu">
                        <img
                            src="/Assets/burger-bar.png"
                            alt=""
                            onClick={handleClick}
                        />
                        {isVisible ? <Sidebar /> : ''}
                    </div>
                </div>
            </div>


        </>
    )
}