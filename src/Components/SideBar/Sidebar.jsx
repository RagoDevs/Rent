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

                            <Link href="/dashboard">
                                <img
                                    className='side--icon'
                                    src="/Assets/menu.svg"
                                    alt=""
                                />
                                Dashboard
                            </Link>
                        </li>
                        <li className={pathname === '/houses' ? 'active' : ''}>

                            <Link href="/houses">
                                <img
                                    src="/Assets/home.png"
                                    alt=""
                                />
                                Houses
                            </Link>
                        </li>
                        <li className={pathname === '/payments' ? 'active' : ''}>

                            <Link href="/payments">
                                <img
                                    src="/Assets/credit-card.png"
                                    alt=""
                                />
                                Payments
                            </Link>
                        </li>
                        <li className={pathname === '/tenants' ? 'active' : ''}>

                            <Link href="/tenants">
                                <img
                                    src="/Assets/lender.png"
                                    alt=""
                                />
                                Tenants
                            </Link>
                        </li>
                        <li className={pathname === '/maps' ? 'active' : ''}>

                            <Link href="/maps">
                                <img
                                    src="/Assets/map.png"
                                    alt=""
                                />
                                Maps
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}