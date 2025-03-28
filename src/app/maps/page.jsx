'use client';

import Sidebar from '@/Components/SideBar/Sidebar';
import './maps.css'
import Header from '@/Components/Topnav/header';
import HouseCards from './Components/HouseCards/HouseCards';
import HouseLocation from './Components/HouseLocation/HouseLocation';
import { RequireAuth } from '@/Components/Require/Require';

export default function Maps() {
    return (
        <RequireAuth>
            <>
                <div className="maps">
                    <div className="topnav">
                        <Header />
                    </div>
                    <div className="maps-container">
                        <div className="maps-wrapper">
                            <div className="sidenav">
                                <Sidebar />
                            </div>
                            <div className="maps-main">
                                <HouseCards />
                                <HouseLocation />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </RequireAuth>
    )
}