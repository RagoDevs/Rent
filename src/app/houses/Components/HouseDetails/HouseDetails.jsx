'use client';

import { useEffect, useState } from 'react';
import './HouseDetails.css'
import { checkExpiry, fetchData, submitData } from '@/Components/constant';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

export default function HouseDetails({ selectedHouse }) {

    const [houseDetails, setHouseDetails] = useState([]);
    const [modal, setModal] = useState(false)
    const [formData, setFormData] = useState({
        location: '',
        block: '',
        partition: '',
        price: ''
    })
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

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handlesSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isNaN(formData.partition)) {
            setIsSubmitting(false);
            toast.warn('Partition must be a number')
            return;
        }

        try {
            const apiData = {
                location: formData.location,
                block: formData.block,
                partition: Number(formData.partition),
                price: formData.price
            };
            await submitData(endpoint, 'PUT', apiData)
            toast.success('House Details Updated')

            setForm({
                location: '',
                block: '',
                partition: '',
                occupied: ''
            });

            setRefreshKey(prev => prev + 1)
        } catch (error) {
            console.log('update house form submission error')
            toast.error('Error submiting changes')
        } finally {
            setIsSubmitting(false);
        }

    }
    return (
        <>
            <ToastContainer />
            {houseDetails.length > 0 ? (
                houseDetails.map((house, index) => (
                    <div className="house-det" key={index}>
                        <div className="house--info" >
                            <div className="houseinfo--header">
                                <p>Block {house.block}</p>
                                <h3>{house.location}</h3>
                                <p>Partition {house.partition}</p>
                            </div>
                            {house.tenant ? (
                                <div className="houseinfo--occupant">
                                    <img src="/Assets/people.png" alt="" />
                                    <h3>{house.tenant}</h3>
                                </div>
                            ) : (
                                <div className="houseinfo--occupant">
                                    <button>Add Tenant</button>
                                </div>
                            )}

                        </div>
                        <div className="house--update">
                            <div className="house--price">
                                <p>Price</p>
                                <h4>Tsh {house.price}/=</h4>
                            </div>
                            <div className="house--status">
                                <p>Status</p>
                                <h4>{house.occupied ? '🔴 Occupied' : '  🟢 Vacant'}</h4>
                            </div>
                            <div className="house--contract">
                                <p>Contract</p>
                                <h4>File</h4>
                            </div>
                            <button
                                onClick={() => {
                                    setFormData({
                                        location: house.location || '',
                                        block: house.block || '',
                                        partition: house.partition?.toString() || '',
                                        price: house.price || ''
                                    });
                                    setModal(true);
                                }}
                            >
                                Make Changes
                            </button>
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
                            <form onSubmit={handlesSubmit}>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder='Location'
                                    value={formData.location}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="block"
                                    placeholder='Block'
                                    value={formData.block}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="partition"
                                    placeholder='Partition'
                                    value={formData.partition}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="price"
                                    placeholder='Price'
                                    value={formData.price}
                                    onChange={handleChange}
                                />

                                <button type='submit'>Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}