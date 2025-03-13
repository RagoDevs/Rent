'use client';

import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import './Dashboard.css'
import DashComp from "./Components/DashComp";
import { RequireAuth } from "@/Components/Require/Require";

export default function Dashboard() {
    return (
        <RequireAuth>
            <div className="dashboard">
                <div className="topnav">
                    <Header />
                </div>
                <div className="dash-container">
                    <div className="dash-wrapper">
                        <div className="sidenav">
                            <Sidebar />
                        </div>
                        <div className="dash-main">
                            <DashComp />
                        </div>
                    </div>
                </div>
            </div>
        </RequireAuth>
    )
}

