import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AppointmentService from '../services/AppointmentService'


const AppointmentTab = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {

        getAllAppointments();
    }, [])

    const getAllAppointments = () => {
        AppointmentService.getAllAppointments().then((response) => {
            setAppointments(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className = "container"style={{marginTop:'200px'}}>
            <h2 className = "text-center"> List Appointments </h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Appointment Id </th>
                    <th> Doctor Code</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        appointments.map(
                            appointment =>
                            <tr key = {appointment.id}>
                                
                               
                                <td > {appointment.id} </td>
                                <td> {appointment.dcode} </td>
                                <td> {appointment.price} </td>

                                <td>{appointment.quantity}</td>
                                <td>
                                    <Link style={{textDecoration:'none',marginLeft: '120px',fontSize:'18px',color:'white', width:'185px',textAlign:'center', fontWeight:'600'}}  className="btn btn-success" to={`/add-appointment/${appointment.dcode}`} >Book</Link>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentTab