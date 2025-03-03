'use client';

import './Houses.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import HousesTable from './Components/HouseTable/HousesTable';
import HouseDetails from './Components/HouseDetails/HouseDetails';

export default function Houses() {
    return (
        <>
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
        </>
    )
}