'use client';

import './Sidebar.css'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <>
            <div className="sidebar">
                <div className="sidebar--dropdown">
                    <ul>
                        <li className={pathname === '/dashboard' ? 'active' : ''}>
                            <img 
                            className='side--icon'
                            src="/Assets/menu.svg" 
                            alt="" />
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className={pathname === '/houses' ? 'active' : ''}>
                            <img src="/Assets/home.png" alt="" />
                            <Link href="/houses">Houses</Link>
                        </li>
                        <li className={pathname === '/payments' ? 'active' : ''}>
                            <img src="/Assets/credit-card.png" alt="" />
                            <Link href="/payments">Payments</Link>
                        </li>
                        <li className={pathname === '/tenants' ? 'active' : ''}>
                            <img src="/Assets/lender.png" alt="" />
                            <Link href="/tenants">Tenants</Link>
                        </li>
                        <li className={pathname === '/maps' ? 'active' : ''}>
                            <img src="/Assets/map.png" alt="" />
                            <Link href="/maps">Maps</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}