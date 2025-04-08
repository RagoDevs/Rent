'use client';

import './Houses.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import HousesTable from './Components/HouseTable/HousesTable';
import HouseDetails from './Components/HouseDetails/HouseDetails';
import { RequireAuth } from '@/Components/Require/Require';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkExpiry, fetchData, getToken } from '@/Components/constant';


export default function Houses() {
    const [houses, setHouses] = useState();
    const [selectedHouse, setSelectedHouse] = useState()
    const router = useRouter();
    const endpoint = '/v1/auth/houses'

    useEffect(() => {
        if(checkExpiry()) {
            router.push('/login')
        }
    }, [checkExpiry])

    useEffect(() => {
        if (!checkExpiry()) {
            fetchData(endpoint).then((data) => {
                setHouses(data);
                if (data.length > 0) setSelectedHouse(data[0]);
            });
        }
    }, [endpoint, checkExpiry, getToken]);

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
                                <HousesTable houses={houses} onHouseClick={setSelectedHouse}/>
                            </div>
                            <div className="housemain-container-two">
                                <HouseDetails selectedHouse={selectedHouse}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RequireAuth>
    )
}