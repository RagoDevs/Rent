'use client';

import { useEffect, useState } from 'react';
import './HouseDetails.css'
import { checkExpiry, fetchData } from '@/Components/constant';
import { useRouter } from 'next/navigation';

export default function HouseDetails({ selectedHouse }) {

    const [houseDetails, setHouseDetails] = useState([]);
    const [modal, setModal] = useState(false)
    const router = useRouter();
    const house = selectedHouse || {}
    const id = house.id;
    const endpoint = `/v1/auth/houses/${id}`;

    useEffect(() => {
        if (checkExpiry()) {
            router.push('/login')
        }
    }, [router])

    useEffect(() => {
        if (id && !checkExpiry()) {
            fetchData(endpoint).then((data) => {
                setHouseDetails([data])
            })
        }
    }, [endpoint, checkExpiry, id])
    return (
        <>
            {houseDetails.length > 0 ? (
                houseDetails.map((house, index) => (
                    <div className="house-det" key={index}>
                        <div className="house--info" >
                            <div className="houseinfo--header">
                                <p>Block {house.block}</p>
                                <h3>{house.location}</h3>
                                <p>Partition {house.partition}</p>
                            </div>
                            <div className="houseinfo--occupant">
                                <img src="/Assets/people.png" alt="" />
                                <h3>Jack Adam</h3>
                            </div>
                        </div>
                        <div className="house--update">
                            <div className="house--price">
                                <p>Price</p>
                                <h4>500,000/=</h4>
                            </div>
                            <div className="house--status">
                                <p>Status</p>
                                <h4>{house.occupied ? '🔴 Occupied' : '  🟢 Vacant'}</h4>
                            </div>
                            <div className="house--contract">
                                <p>Contract</p>
                                <h4>File</h4>
                            </div>
                            <button onClick={() => setModal(true)}>Make Changes</button>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ marginTop: '10px' }}>Searching Details</p>
            )}
            <div className="house--activity">
                <h3>Activities</h3>
                <ul>
                    <li>Jack payed 20000 for rent</li>
                    <li>The Iron Claw</li>
                    <li>Out of Darkness</li>
                    <li>Jurassic World Dominion</li>
                    <li>The Equalizer 3 </li>
                    <li>Batman</li>
                    <li>Superman</li>
                </ul>
            </div>
            {modal && (
                <div className="update-house-bg">
                    <div className="update-house">
                        <button className="close-btn" onClick={() => setModal(false)}>
                            ✖
                        </button>
                        <div className="update-house-form">
                            <h4>Update House Details</h4>
                            <form>
                                <input
                                    type="text"
                                    name=""
                                    placeholder='Location'
                                />

                                <input
                                    type="text"
                                    name=""
                                    placeholder='Partition'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}