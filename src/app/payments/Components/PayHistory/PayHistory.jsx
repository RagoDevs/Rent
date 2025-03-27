'use client';

import { useEffect, useState } from 'react';
import './PayHistory.css'
import { base_url, checkExpiry, getToken } from '@/Components/constant';
import { useRouter } from 'next/navigation';


export default function PayHistory () {

    const [pay, setPay] = useState([])
    const router = useRouter();

    useEffect(() => {
        if (checkExpiry()) {
            router.push('/login')
        }
    }, [router])

    useEffect(() => {
        const fetchPay = async () => {
            try {
                const response = await fetch(`${base_url}/v1/auth/payments`, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setPay(data)
            }
            catch (error) {
                console.error('Error fetching pays')
            }
        }
        if(!checkExpiry()) {
            fetchPay();
        }
    }, [checkExpiry, getToken])
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
                                    <th>House</th>
                                    <th>Amount</th>
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
                                            <td>{item.block}</td>
                                            <td>{item.amount}</td>
                                        </tr>
                                    )
                                })
                             ) : (
                                <tr>
                                    <td>No Payments</td>
                                </tr>
                             )}
                            </tbody>
                        </table>
                    </div>
                </div>
        </>
    )
}