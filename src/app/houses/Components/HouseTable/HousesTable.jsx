'use client'

import { useEffect, useState } from 'react';
import './HouseTable.css';
import useIsSuperUser, { submitData } from '@/Components/constant';
import { toast, ToastContainer } from 'react-toastify';

export default function HousesTable({ houses = [], onHouseClick }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [modal, setModal] = useState(false);
    const [selectedHouse, setSelectedHouse] = useState(houses[0]?.id || null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        location: '',
        block: '',
        partition: '',
        occupied: ''
    });
    const [refreshKey, setRefreshKey] = useState(0)
    const isSuperUser = useIsSuperUser();

    useEffect(() => {
        if (houses.length > 0 && selectedHouse === houses[0]?.id) {
            setSelectedHouse(houses[0].id);
            onHouseClick(houses[0]);
        }
    }, [houses, selectedHouse, onHouseClick]);

    const filterHouses = houses.filter((house) =>
        house.location.toLowerCase().includes(searchQuery.toLowerCase()))


    useEffect(() => {
        if (filterHouses.length > 0) {
            const stillExists = filterHouses.some(house => house.id === selectedHouse);
            if (!stillExists) {
                setSelectedHouse(filterHouses[0].id);
                onHouseClick(filterHouses[0]);
            }
        }
    }, [filterHouses, selectedHouse, onHouseClick]);
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: name === 'occupied' ? value === 'true' : value
        }));
    }

    const handlesSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isNaN(form.partition)) {
            setIsSubmitting(false);
            toast.warn('Partition must be a number')
            return;
        }

        try {
            const apiData = {
                location: form.location,
                block: form.block,
                partition: Number(form.partition),
                occupied: form.occupied === true
            };
            await submitData('/v1/auth/houses', 'POST', apiData)
            toast.success('New House Added')

            setForm({
                location: '',
                block: '',
                partition: '',
                occupied: ''
            });

            setRefreshKey(prev => prev + 1)
        } catch (error) {
            console.log('add house form submission error')
            toast.error('Error submiting form')
        } finally {
            setIsSubmitting(false);
        }

    }
    return (
        <>
            <ToastContainer />
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
                                <form onSubmit={handlesSubmit}>
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
                                        <select name="occupied"
                                            value={form.occupied === true ? 'true' : form.occupied === false ? 'false' : ''}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Pick Options</option>
                                            <option value={true}>Occupied</option>
                                            <option value={false}>Vacant</option>
                                        </select>

                                    </div>
                                    <button type='submit' disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Send it'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                <div className="house--table">

                    <table key={refreshKey}>
                        <thead>
                            <tr>
                                <td>Location</td>
                                <td>Block</td>
                                <td>Partition</td>
                                <td>Occupied</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {filterHouses.length > 0 ? (
                                filterHouses.map((items) => {
                                    return (
                                        <tr
                                            key={items.id}
                                            onClick={() => {
                                                setSelectedHouse(items.id);
                                                onHouseClick(items);
                                            }}
                                            className={selectedHouse === items.id ? 'highlighted' : ''}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <td>{items.location}</td>
                                            <td>{items.block}</td>
                                            <td>{items.partition}</td>
                                            <td style={{ color: items.occupied ? '#f8d7da' : '#28a745' }}>
                                                {items.occupied ? '🔴 Occupied' : '  🟢 Vacant'}
                                            </td>
                                            <td>
                                                {isSuperUser ?
                                                    <div style={{width: '140px', display: 'flex', justifyContent: 'center', gap: '10px'}}>
                                                        <button className='disable-btn'>Disable</button>
                                                        <button className='delete-btn'>Delete</button>
                                                    </div>
                                                    :
                                                    <button className='disable-btn'>Disable</button>
                                                }
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} style={{ borderBottom: 'none' }}>
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