//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminviewall() {
    const [patientlist, setPatientList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewalluser')
            .then(response => {
                console.log(response.data)
                setPatientList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewPatientList() {
        return patientlist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.patientname}</td>
                    <td>{currentrow.patientemail}</td>
                    <td>{currentrow.patientmobile}</td>
                    <td>{currentrow.patientdob}</td>
                    <td>{currentrow.patientgender}</td>
                    <td>{currentrow.patientcountry}</td>
                    <td>{currentrow.patientaddress}</td>
                </tr>
            );
        });
    }

    return (
        <div align="center">
            <Navbar />

            <h3>ALL PATIENT DETAILS</h3>

            <table border="1" class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {viewPatientList()}
                </tbody>
            </table>
        </div>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminviewall