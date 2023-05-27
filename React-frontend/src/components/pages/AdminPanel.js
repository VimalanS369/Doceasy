import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DoctorService from '../services/DoctorService'

const ListDoctorComponent = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {

        getAllDoctors();
    }, [])

    const getAllDoctors = () => {
        DoctorService.getAllDoctors().then((response) => {
            setDoctors(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDoctor = (id) => {
       DoctorService.deleteDoctor(id).then((response) =>{
        getAllDoctors();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container" style={{marginTop:'200px'}}>
            <h2 className = "text-center"> List Doctors </h2>
            <Link to = "/add-doctor" style={{textDecoration:'none',marginLeft: '120px',fontSize:'18px',color:'white', width:'185px',textAlign:'center', fontWeight:'600',marginBottom:'25px'}}  className="btn btn-success"> Add Doctor </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Doctor Id </th>
                    <th> Doctor Code </th>
                    <th> Doctor Name </th>
                    <th> Department </th>
                    <th> Description </th>
                    <th> Fees </th>
                    <th> Action </th>
                </thead>
                <tbody>
                    {
                        doctors.map(
                            doctor =>
                            <tr key = {doctor.id}>
                                
                                <td > {doctor.did} </td>
                                <td > {doctor.id} </td>
                                <td> {doctor.name} </td>
                                <td>{doctor.department}</td>
                                <td>{doctor.description}</td>
                                <td>{doctor.fee}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-doctor/${doctor.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteDoctor(doctor.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDoctorComponent