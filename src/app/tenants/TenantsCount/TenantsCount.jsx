'use client';

import './TenantsCount.css'
import {
    User,
    Users,
    UserPlus,
    UserMinus,
    DollarSign,
    Mail,
    Phone,
    Calendar,
    Plus,
    Home
} from "lucide-react"

export function StatCard(props) {
    const {
        title,
        value,
        icon,
        description,
        trend,
        className = "",
        valueClassName = "",
        iconClassName = "",
    } = props;

    return (
        <div className={`stat-card ${className}`}>
            <div className="stat-card-header">
                <div>
                    <p className="stat-title">{title}</p>
                    <h4 className={`stat-value ${valueClassName}`}>{value}</h4>
                    {description && <p className="stat-description">{description}</p>}

                    {trend && (
                        <div className="stat-trend">
                            <span className={`trend-value ${trend.isPositive ? "positive" : "negative"}`}>
                                {trend.isPositive ? "+" : "-"}
                                {Math.abs(trend.value)}%
                            </span>
                            <span className="trend-label">vs last month</span>
                        </div>
                    )}
                </div>

                {icon && (
                    <div className={`stat-icon ${iconClassName}`}>
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function TenantsCount() {
    return (
        <>
        <div className="pay-header">
        <div className="tenantwrapper--one">
                    <img src="/Assets/tenant.jpg" alt="" />
                    <h3>Tenant information</h3>
                    <p>All the details about tenants</p>
                </div>
        <div className="card-grid">
            <StatCard
                title="Total Tenants"
                value="20"
                icon={<Users className="icon-blue" />}
                iconClassName="bg-blue"
            />

            <StatCard
                title="New Tenants"
                value="3"
                icon={<UserPlus className="icon-green" />}
                iconClassName="bg-green"
                description="Last 30 days"
            />

            <StatCard
                title="Tenant Dues"
                value="8"
                icon={<DollarSign className="icon-amber" />}
                iconClassName="bg-amber"
            />

            <StatCard
                title="Left Tenants"
                value="2"
                icon={<UserMinus className="icon-red" />}
                iconClassName="bg-red"
                description="Last 30 days"
            />
        </div>
        </div>
</>

    )
}