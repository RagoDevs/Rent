'use cleint';

import './UpcomingPay.css'
import { Calendar, DollarSign, Plus, Receipt } from "lucide-react";
// export default function UpcomingPay() {
//     return (
//         <>
//             <div className="pay--header">
//                 <h2>Payments</h2>
//             </div>
//             <div className="paycontainer--one">
//                 <div className="paywrapper--one">
//                     <h3>Upcoming Payments</h3>
//                     <div className="payment--table">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Building</th>
//                                     <th>To be payed
//                                     </th>
//                                     <th>Amount</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h4>House A</h4>
//                                     </td>
//                                     <td>01-02-2025</td>
//                                     <td>Tsh 10000/=</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="paywrapper--two">
//                     <div className="paywrapper--min1">
//                         <div className="paymenttotal-header">
//                             <img src="/Assets/credit-card.png" alt="" />
//                             <h2>Total Payments</h2>
//                         </div>
//                         <h3>Tsh 1.900,000</h3>
//                         <p>Received</p>
//                     </div>
//                     <div className="paywrapper--min2">
//                         <div className="paymentdue-header">
//                             <img src="/Assets/due.png" alt="" />
//                             <h2>Total Due</h2>
//                         </div>
//                         <h3>Tsh 1.900,000</h3>
//                         <p>Due</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

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

export function PayCards() {
    return (
        <div className="card-grid">
            <StatCard
                title="Total Payments Received"
                value="Tsh 1,900,000"
                description="Current month"
                icon={<DollarSign className="icon-green" />}
                iconClassName="bg-green"
                trend={{ value: 8, isPositive: true }}
            />
            <StatCard
                title="Pending Payments"
                value="Tsh 350,000"
                icon={<Receipt className="icon-amber" />}
                iconClassName="bg-amber"
                trend={{ value: 12, isPositive: false }}
            />
            <StatCard
                title="Total Due"
                value="Tsh 1,900,000"
                icon={<Calendar className="icon-red" />}
                iconClassName="bg-red"
            />
            <StatCard
                title="Average Payment"
                value="Tsh 95,000"
                icon={<DollarSign className="icon-blue" />}
                iconClassName="bg-blue"
                trend={{ value: 3, isPositive: true }}
            />
        </div>

    )
}