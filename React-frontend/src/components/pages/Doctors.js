import React, { Link,useEffect, useState } from 'react'
import DoctorService from "../services/DoctorService"


const Doctors = () => {
    
  const [doctors, setdoctors] = useState([])

    useEffect(() => {
        DoctorService.getAllDoctors().then((response) => {
            setdoctors(response.data)
        })

        

    }, [])
  
    return(
    <div className = "container" style={{marginTop:'200px'}}>
    <h2 className = "text-center"> List of Doctors </h2>
   <table className="table table-bordered table-striped">
        <thead>
            <th> Doctor Id </th>
            <th> Dcode </th>
            <th> Doctor Name </th>
            <th> Department </th>
            <th> Description </th>
            <th> Fees </th>
        </thead>
        <tbody>
            {
                doctors.map(
                    doctor =>
                    <tr  key = {doctor.id}> 
                        <td > {doctor.id} </td>
                        <td > {doctor.did} </td>
                        <td> {doctor.name} </td>
                        <td>{doctor.department}</td>
                        <td>{doctor.description}</td>
                        <td>{doctor.fee}</td>
                    
                        
                    </tr>
                )
            }
        </tbody>
    </table>

</div>


    );
  };
  
  export default Doctors;