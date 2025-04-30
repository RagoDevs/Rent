'use client';

import './Sidebar.css'

import Link from "next/link";
import { LayoutDashboard, Home, CreditCard, Users, Map, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from '../Require/AuthProvider';

export default function Sidebar() {

    const pathname = usePathname();
    const { signout } = useAuth();

    return (
        <>
            <div className="sidebar">
                <div className="sidebar--dropdown">
                    <ul>
                        <li className={pathname === '/dashboard' ? 'active' : ''}>

                            <Link href="/dashboard">
                                <div className="side-link">
                                    <LayoutDashboard className="side--icon" />
                                    Dashboard
                                </div>
                            </Link>
                        </li>
                        <li className={pathname === '/houses' ? 'active' : ''}>

                            <Link href="/houses">
                            <div className="side-link">
                                    <Home className="side--icon" />
                                    Houses
                                </div>
                            </Link>
                        </li>
                        <li className={pathname === '/payments' ? 'active' : ''}>

                            <Link href="/payments">
                            <div className="side-link">
                                    <CreditCard className="side--icon" />
                                    Payments
                                </div>
                            </Link>
                        </li>
                        <li className={pathname === '/tenants' ? 'active' : ''}>

                            <Link href="/tenants">
                            <div className="side-link">
                                    <Users className="side--icon" />
                                    Tenants
                                </div>
                            </Link>
                        </li>
                        <li className={pathname === '/maps' ? 'active' : ''}>

                            <Link href="/maps">
                            <div className="side-link">
                                    <Map className="side--icon" />
                                    Maps
                                </div>
                            </Link>
                        </li>
                        <div className="log--out" onClick={signout}>
                            <li className={pathname === '/logout' ? 'active' : ''}>
                            <div className="side-link">
                                    <LogOut className="side--icon" />
                                    LogOut
                                </div>

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}