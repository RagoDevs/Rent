'use client'

import { useState } from 'react';
import './HouseTable.css';

export default function HousesTable({ houses = [], setSelectedHouse }) {
    const [searchQuery, setSearchQuery] = useState('')

    const filterHouses = houses.filter((house) =>
    house.location.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
        <>
            <div className="houses-table-container">
                <div className="house--header">
                    <h2>Houses</h2>
                    <div className="househeader--search">
                        <div className="search--input">
                            <input 
                            type="search" 
                            value={searchQuery}
                            placeholder="Search House" 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            />

                        </div>
                        <div className="add--house">
                            <button>New House</button>
                        </div>
                    </div>
                </div>
                <div className="house--table">

                    <table>
                        <thead>
                            <tr>
                                <td>Location</td>
                                <td>Block</td>
                                <td>Partition</td>
                                <td>Occupied</td>
                            </tr>
                        </thead>
                        <tbody>
                            {filterHouses.length > 0 ? (
                                filterHouses.map((items, index) => {
                                    return (
                                    <tr 
                                    key={index} 
                                    onClick={() => setSelectedHouse(items.id)}
                                    style={{cursor: 'pointer'}}
                                    >
                                        <td>{items.location}</td>
                                        <td>{items.block}</td>
                                        <td>{items.partition}</td>
                                        <td style={{ color: items.occupied ? '#33ff3c' : '#ef091a' }}>
                                            {items.occupied ? 'Occupied' : 'Vacant'}</td>
                                    </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={4} style={{ borderBottom: 'none' }}>
                                        <div style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '16px' }}>
                                            No Houses Found
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}