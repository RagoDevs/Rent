'use client'

import './HouseTable.css';

export default function HousesTable() {
    return (
        <>
            <div className="houses-table-container">
                <div className="house--header">
                    <h2>Houses</h2>
                    <div className="househeader--search">
                        <div className="search--input">
                            <input type="search" placeholder="Search House" />

                        </div>
                        <div className="add--house">
                            <button>New House</button>
                        </div>
                    </div>
                </div>
                <div className="house--table">
                    <table>
                        <tbody>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House A</td>
                                <td>Jack Adam</td>
                            </tr>
                            <tr>
                                <td><h4>Kivule</h4></td>
                                <td>Block A </td>
                                <td>House B</td>
                                <td>Jack Adam</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}