'use client';

import './TenantsCount.css'

export default function TenantsCount () {
    return (
        <>
        <div className="tenantcontainer--one">
                    <div className="tenantwrapper--one">
                        <img src="/Assets/tenant.jpg" alt="" />
                        <h3>Tenant information</h3>
                        <p>All the details about tenants</p>
                    </div>
                    <div className="tenantwrapper--two">
                        <div className="tenantwrapper--min1">
                            <div className="side--color"></div>
                            <div className="tenant--total">
                                <h3>Total Tenants</h3>
                                <h4>20</h4>
                            </div>
                        </div>
                        <div className="tenantwrapper--min2">
                            <div className="side--color1"></div>
                            <div className="tenant--due">
                                <h3>Tenant Dues</h3>
                                <h4>8</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tenantwrapper--three">
                        <div className="tenantwrapper--min1">
                            <div className="side--color"></div>
                            <div className="tenant--new">
                                <h3>New Tenants</h3>
                                <h4>3</h4>
                            </div>
                        </div>
                        <div className="tenantwrapper--min2">
                            <div className="side--color1"></div>
                            <div className="tenant--left">
                                <h3>Left Tenants</h3>
                                <h4>2</h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}