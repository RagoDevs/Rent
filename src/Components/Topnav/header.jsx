'use client';

import './Header.css'

export default function Header () {
    return (
        <>
         <div className="header">
        <div className="header--left">
            <img src="/Assets/logo.png" alt=""/>
            <h2>Pango</h2>
        </div>
        <div className="header--right">
            <img src="/Assets/exit.png" alt=""/>
            <h2>LOGOUT</h2>
        </div>
    </div>
        </>
    )
}