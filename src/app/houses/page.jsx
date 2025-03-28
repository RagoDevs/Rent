'use client';

import './Houses.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import HousesTable from './Components/HouseTable/HousesTable';
import HouseDetails from './Components/HouseDetails/HouseDetails';
import { RequireAuth } from '@/Components/Require/Require';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { base_url, checkExpiry, getToken } from '@/Components/constant';

export default function Houses() {
    const [houses, setHouses] = useState();
    const [selectedHouse, setSelectedHouse] = useState()
    const router = useRouter();

    useEffect(() => {
        if(checkExpiry()) {
            router.push('/login')
        }
    }, [checkExpiry])

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await fetch(`${base_url}/v1/auth/houses`, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/json'
                    }
                })

                const data = await response.json();
                setHouses(data)
                setSelectedHouse(data[0])
            } catch (error) {
                console.log('error occured')
            }
        }
        if(!checkExpiry()) {
            fetchHouses();
        }
    }, [checkExpiry, getToken])

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
                                <HousesTable houses={houses} setSelectedHouse={setSelectedHouse}/>
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