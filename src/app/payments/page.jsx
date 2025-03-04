'use client';

import './payments.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import UpcomingPay from './Components/PaymentData/UpcomingTable';
import PayHistory from './Components/PayHistory/PayHistory';

export default function Payments() {
    return (
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
                            <UpcomingPay />
                            <PayHistory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}