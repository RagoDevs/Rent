'use client';

import { useEffect, useState } from 'react';
import './PayHistory.css'
import useIsSuperUser, { checkExpiry, fetchData, getToken } from '@/Components/constant';
import { useRouter } from 'next/navigation';


export default function PayHistory() {

    const [pay, setPay] = useState([]);
    const [modal, setModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const endpoint = '/v1/auth/payments'
    const isSuperUser = useIsSuperUser();

    useEffect(() => {
        if (checkExpiry()) {
            router.push('/login')
        }
    }, [router])

    useEffect(() => {
        if (!checkExpiry()) {
            fetchData(endpoint).then((data) => {
                setPay(data);
            })
        }
    }, [endpoint, checkExpiry, getToken]);
    return (
        <>
            <div className="paywrapper--three">
                <div className="paywrapper-header">
                    <h3>Transaction History</h3>
                    <button onClick={() => setModal(true)}>Add New Payment</button>
                </div>
                <div className="history-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Block-Partition</th>
                                <th>Amount</th>
                                <th style={{ width: '170px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pay && pay.length > 0 ? (
                                pay.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.tenant_name}</td>
                                            <td>{new Date(item.updated_at).toISOString().split('T')[0]}</td>
                                            <td>{item.location}</td>
                                            <td>{item.block} - {item.partition}</td>
                                            <td>{item.amount}</td>

                                            <td>
                                                {isSuperUser ?
                                                    <div style={{ width: '140px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                                        <button className='edit-btn' >Edit</button>
                                                        <button className='disable-btn'>Disable</button>
                                                        <button className='delete-btn'>Delete</button>
                                                    </div>
                                                    :
                                                    <div>
                                                        <button className='edit-btn' >Edit</button>
                                                        <button className='disable-btn'>Disable</button>
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={6}>No Payments Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {modal && (
                <div className="add-pay-bg">
                    <div className="add-pay">
                        <button className="close-btn" onClick={() => setModal(false)}>
                            ✖
                        </button>
                        
                        <div className="add-pay-form">
                        <h2>Add New Payment</h2>
                            <form >
                                <input
                                    type="text"
                                    placeholder='Tenant Name'
                                    name='name'
                                />
                                <input
                                    type="number"
                                    placeholder='Amount'
                                    name='amount'
                                />
                                <input
                                    type="text"
                                    placeholder='Start Date'
                                    name='start_date'
                                />
                                <input
                                    type="text"
                                    placeholder='End Date'
                                    name='end_date'
                                />

                                <button type='submit' disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Send it'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}