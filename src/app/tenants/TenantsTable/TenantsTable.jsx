'use client';

import { useEffect, useState } from 'react';
import './TenantsTable.css'
import { useRouter } from 'next/navigation';
import { checkExpiry, fetchData, getToken } from '@/Components/constant';

export default function TenantsTable() {
    const [tenants, setTenants] = useState([])
    const router = useRouter();
    const endpoint = '/v1/auth/tenants'

    useEffect(() => {
        if(checkExpiry()) {
            router.push('/login')
        }
    }, [checkExpiry])

    useEffect(() => {
        if(!checkExpiry()) {
            fetchData(endpoint).then((data) => {
                setTenants(data);
            })
        }
    }, [endpoint, checkExpiry, getToken])
    return (
        <>
            <div className="tenantcontainer--two">
                <h4>Tenants Table</h4>
                <div className="tenantwrapper--table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>House</th>
                                <th>Present</th>
                                <th>Contacts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tenants && tenants.length > 0 ? (
                                tenants.map((items, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{items.name}</td>
                                            <td>{ }</td>
                                            <td style={{ color: items.active ? '#33ff3c' : '#ef091a' }}>
                                                {items.active ? 'Present' : 'Absent'}
                                            </td>
                                            <td>{items.phone}</td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={4} style={{ borderBottom: 'none' }}>
                                        <div style={{ textAlign: 'center', verticalAlign: 'middle', height: '100px' }}>
                                            No Data Available
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