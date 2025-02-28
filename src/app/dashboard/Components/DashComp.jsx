'use client';

import RentDue from "./Dashtables/RentDues/RentDue";
import './DashComp.css'
import EmptyHouses from "./Dashtables/EmptyHouses/EmptyHouses";


export default function DashComp () {
    return (
        <>
        <div className="dash-content-container">
            <div className="dash-content-wrapper">
                <div className="due-rent">
                    <RentDue />
                </div>
                <div className="dashwrapper-side">
                    <EmptyHouses />
                </div>
            </div>
        </div>
        </>
    )

}