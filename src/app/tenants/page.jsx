'use client';

import './Tenants.css'
import Sidebar from "@/Components/SideBar/Sidebar";
import Header from "@/Components/Topnav/header";
import TenantsCount from './TenantsCount/TenantsCount';
import TenantsTable from './TenantsTable/TenantsTable';

export default function Tenants () {
    return ( 
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
                                    <TenantsCount />
                                    <TenantsTable />
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}