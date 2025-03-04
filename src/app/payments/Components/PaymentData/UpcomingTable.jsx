'use cleint';

import './UpcomingPay.css'
export default function UpcomingPay () {
    return (
        <>
        <div className="pay--header">
                    <h2>Payments</h2>
                </div>
                <div className="paycontainer--one">
                    <div className="paywrapper--one">
                        <h3>Upcoming Payments</h3>
                        <div className="payment--table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Building</th>
                                        <th>To be payed
                                        </th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>House A</h4>
                                        </td>
                                        <td>01-02-2025</td>
                                        <td>Tsh 10000/=</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="paywrapper--two">
                        <div className="paywrapper--min1">
                            <div className="paymenttotal-header">
                                <img src="/Assets/credit-card.png" alt="" />
                                <h2>Total Payments</h2>
                            </div>
                            <h3>Tsh 1.900,000</h3>
                            <p>Received</p>
                        </div>
                        <div className="paywrapper--min2">
                            <div className="paymentdue-header">
                                <img src="/Assets/due.png" alt="" />
                                <h2>Total Due</h2>
                            </div>
                            <h3>Tsh 1.900,000</h3>
                            <p>Due</p>
                        </div>
                    </div>
                </div>
        </>
    )
}