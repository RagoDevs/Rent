'use client'

import { useState } from 'react';
import './HouseTable.css';

export default function HousesTable({ houses = [], setSelectedHouse }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({
        location: '',
        block: '',
        partition: '',
        occupied: ''
    })


    const filterHouses = houses.filter((house) =>
        house.location.toLowerCase().includes(searchQuery.toLowerCase()))

    function handleChange(e) {
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        });
    }
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
                        <div className="add-house-btn">
                            <button onClick={() => setModal(true)}>New House</button>
                        </div>
                    </div>
                </div>
                {modal && (
                    <div className="add-house-bg">
                        <div className="add-house">
                            <button className="close-btn" onClick={() => setModal(false)}>
                                ✖
                            </button>
                            <div className="add-house-form">
                                <h4>ADD A NEW HOUSE</h4>
                                <form>
                                    <input
                                        type="text"
                                        name='location'
                                        placeholder='Add Location'
                                        value={form.location}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name='block'
                                        placeholder='Add Block'
                                        value={form.block}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name='partition'
                                        placeholder='Add Partition'
                                        value={form.partition}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="add-house-dropdown">
                                        <label>Is it Occupied?</label>
                                        <select name="occupied" value={form.occupied} onChange={handleChange}>
                                            <option value="" disabled>Pick Options</option>
                                            <option value={true}>Occupied</option>
                                            <option value={false}>Vacant</option>
                                        </select>

                                    </div>
                                    <button>Send It</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
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
                                            style={{ cursor: 'pointer' }}
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