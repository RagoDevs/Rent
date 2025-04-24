'use client';

import RentDue from "./Dashtables/RentDues/RentDue";
import './DashComp.css'
import EmptyHouses from "./Dashtables/EmptyHouses/EmptyHouses";
import NewEntrants from "./Dashtables/NewEntrants/NewEntrants";
import TotalPay from "./TotalPay/TotalPay";
import DashboardCards from "./Cards/stat-card";


export default function DashComp() {
    return (
        <>
            <div className="dash-content-container">
                <div className="dash-stat-cards">
                    <DashboardCards />
                </div>
                <div className="dash-content-wrapper">
                    <div className="due-rent">
                        <RentDue />
                    </div>
                    <div className="dashwrapper-side">
                        <EmptyHouses />
                        <NewEntrants />
                    </div>
                </div>
                <div className="dash-bottom">
                    <TotalPay />
                </div>
            </div>
        </>
    )

}