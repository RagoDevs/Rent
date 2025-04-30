'use client';

import { UserRound } from 'lucide-react';
import './NewEntrants.css'

export default function NewEntrants() {
    return (
        <>
            <div className="dashwrapper-area2">
                <h2>New Entrants</h2>
                <div className="entrant--prof">
                    <UserRound 
                    className='tenant-icon'
                    />
                        <div className="entrant--details">
                            <h3>Jack Adam</h3>
                            <p>House B - Ukonga</p>
                        </div>
                </div>
            </div>
        </>
    )
}