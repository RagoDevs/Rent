'use client';
import './TotalPay.css'
import { DollarSign, Callender } from 'lucide-react';

export default function TotalPay() {
    return (
        <div className="dashbottom-wrapper1">
            <div className="card-content">
                <div className="card-inner">
                    <div className="icon-circle">
                        <DollarSign className="icon" />
                    </div>
                    <h3 className="amount">Tsh 3,000,000/-</h3>
                    <p className="description">Total payments collected</p>
                </div>
            </div>
        </div>


    )
}