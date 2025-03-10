'use client';

import './Tenants.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import TenantsCount from './TenantsCount/TenantsCount';
import TenantsTable from './TenantsTable/TenantsTable';
import { RequireAuth } from '@/Components/Require/Require';

export default function Tenants() {
    return (
        <RequireAuth>
            <>
                <div className="tenants">
                    <div className="topnav">
                        <Header />
                    </div>
                    <div className="tenants-container">
                        <div className="tenants-wrapper">
                            <div className="sidenav">
                                <Sidebar />
                            </div>
                            <div className="tenants-main">
                                <div className="tenants-count">
                                    <TenantsCount />
                                </div>
                                <div className="tenants-table-bg">
                                    <TenantsTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </RequireAuth>
    )
}