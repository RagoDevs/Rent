'use client';

import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import './Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <div className="topnav">
                    <Header />
                </div>
                <div className="dash-container">
                    <div className="dash-wrapper">
                        <div className="sidebar">
                            <Sidebar />
                        </div>
                        <div className="dash-main"></div>
                    </div>
                </div>
            </div>
        </>
    )
}