'use client';

import './Houses.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import HousesTable from './Components/HouseTable/HousesTable';
import HouseDetails from './Components/HouseDetails/HouseDetails';
import { RequireAuth } from '@/Components/Require/Require';

export default function Houses() {
    return (
        <RequireAuth>
            <div className="houses">
                <div className="topnav">
                    <Header />
                </div>
                <div className="house-container">
                    <div className="house-wrapper">
                        <div className="sidenav">
                            <Sidebar />
                        </div>
                        <div className="house-main">
                            <div className="housemain-container-one">
                                <HousesTable />
                            </div>
                            <div className="housemain-container-two">
                                <HouseDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RequireAuth>
    )
}