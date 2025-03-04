'use client'

import './HouseCards.css';

export default function HouseCards() {
    return (
        <>
            <div className="maps--header">
                <h2>Map View</h2>
                <p>Displaying locations of houses and their partitions</p>
            </div>
            <div className="mapscontainer--one">
                <div className="maps--card">
                    <img src="/Assets/house.jpg" alt="" />
                    <div className="location--title">
                        <h3>Kivule</h3>
                        <h4>Block A, House A</h4>
                    </div>
                </div>
                <div className="maps--card">
                    <img src="/Assets/house.jpg" alt="" />
                    <div class="location--title">
                        <h3>Kivule</h3>
                        <h4>Block A, House A</h4>
                    </div>
                </div>
                <div className="maps--card">
                    <img src="/Assets/house.jpg" alt="" />
                    <div class="location--title">
                        <h3>Kivule</h3>
                        <h4>Block A, House A</h4>
                    </div>
                </div>
                <div className="maps--card">
                    <img src="/Assets/house.jpg" alt="" />
                    <div className="location--title">
                        <h3>Kivule</h3>
                        <h4>Block A, House A</h4>
                    </div>
                </div>
            </div>
        </>
    )
}