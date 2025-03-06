'use client';

import './HouseDetails.css'

export default function HouseDetails () {
    return (
        <>
        <div className="house--info">
                    <div className="houseinfo--header">
                        <p>Kivule</p>
                        <h3>House A</h3>
                        <p>Block A</p>
                    </div>
                    <div className="houseinfo--occupant">
                        <img src="/Assets/people.png" alt="" />
                        <h3>Jack Adam</h3>
                    </div>
                </div>
                <div className="house--update">
                    <div className="house--price">
                        <p>Price</p>
                        <h4>500,000/=</h4>
                    </div>
                    <div className="house--status">
                        <p>Status</p>
                        <h4>Occupied</h4>
                    </div>
                    <div className="house--contract">
                        <p>Contract</p>
                        <h4>File</h4>
                    </div>
                    <button>Make Changes</button>
                </div>
                <div className="house--activity">
                    <h3>Activities</h3>
                    <ul>
                        <li>Jack payed 20000 for rent</li>
                        <li>The Iron Claw</li>
                        <li>Out of Darkness</li>
                        <li>Jurassic World Dominion</li>
                        <li>The Equalizer 3 </li>
                        <li>Batman</li>
                        <li>Superman</li>
                    </ul>
                </div>
        </>
    )
}