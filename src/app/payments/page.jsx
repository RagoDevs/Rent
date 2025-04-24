'use client';

import './payments.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import { PayCards } from './Components/PaymentData/PayCards';
import PayHistory from './Components/PayHistory/PayHistory';
import { RequireAuth } from '@/Components/Require/Require';

export default function Payments() {
    return (
        <RequireAuth>
            <>
                <div className="payments">
                    <div className="topnav">
                        <Header />
                    </div>
                    <div className="payments-container">
                        <div className="payments-wrapper">
                            <div className="sidenav">
                                <Sidebar />
                            </div>
                            <div className="payments-main">
                                <div className="upcoming">
                                    <PayCards />
                                </div>
                                <div className="history">
                                    <PayHistory />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </RequireAuth>
    )
}