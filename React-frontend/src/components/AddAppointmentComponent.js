import React, { useState, useEffect } from "react";
import {Link, useNavigate, useParams } from 'react-router-dom';
import AppointmentService from "./services/AppointmentService"
import ConfirmationService from "./services/ConfirmationService";

const AddAppointmentComponent = () =>{
    
    const [did, setId] = useState('')
    const [dcode, setDcode] = useState('')
      const [price, setPrice] = useState('')
      const [quantity, setQuantity] = useState('')
      const navigate = useNavigate();
      const {id} = useParams();
      
     const appointment = { "appointmentLineItemsDtoList":[{dcode,price,quantity}]}
      const saveOrUpdateAppointment = (e) => {
          e.preventDefault();
           


        
          ConfirmationService.createAppointment(appointment).then((response) =>{
            console.log(response.data)
            alert(response.data)
            
            navigate('../list-appointment');

          }).catch(error => {
            console.log(error)
            alert("Error Occured")
          })
        

        
      }

      useEffect(() => {

        AppointmentService.getAppointmentById(id).then((response) =>{
            setId(response.data.id)
            setQuantity(response.data.quantity)
            setDcode(response.data.dcode)
            setPrice(response.data.price)
            
        }).catch(error => {
            console.log(error)
        })
        // ConfirmationService.getConfirmationById(id).then((response) =>{

        //     setPrice(response.data.price)
            
        // }).catch(error => {
        //     console.log(error)
        // })


    }, [])

    const title = () => {

        if(dcode){
            return <h2 className = "text-center">Update Appointment</h2>
        }else{
            return <h2 className = "text-center">Add Appointment</h2>
        }
    }



   return(
       <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    
                    {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                            <div className = "form-group mb-2">
                                    <label className = "form-label">Appointment Id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Appointment ID"
                                        name = "id"
                                        className = "form-control"
                                        value = {did}
                                        onChange = {(e) => setId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Doctor Code :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Doctor Code"
                                        name = "doctorcode"
                                        className = "form-control"
                                        value = {dcode}
                                        onChange = {(e) => setDcode(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Quantity :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Quantity of Hours"
                                        name = "quantity"
                                        className = "form-control"
                                        
                                        onChange = {(e) => setQuantity(e.target.value)}
                                    >
                                    </input>
                                </div>

                               

                                 <button className = "btn btn-success" onClick = {(e) => saveOrUpdateAppointment(e)} >Submit </button>
                                <Link to="/list-appointment" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>

   )

}
export default AddAppointmentComponent

