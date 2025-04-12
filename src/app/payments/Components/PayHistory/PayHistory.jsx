'use client';

import { useEffect, useState } from 'react';
import './PayHistory.css'
import { checkExpiry, fetchData, getToken } from '@/Components/constant';
import { useRouter } from 'next/navigation';


export default function PayHistory () {

    const [pay, setPay] = useState([])
    const router = useRouter();
    const endpoint = '/v1/auth/payments'

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
                    <h3>Transaction History</h3>
                    <div className="history-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Block-Partition</th>
                                    <th>Amount</th>
                                    <th style={{width: '170px'}}>Actions</th>
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
                                                <button className='edit-btn' >Edit</button>
                                                <button className='delete-btn'>Delete</button>
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
        </>
    )
}