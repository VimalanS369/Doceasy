import React, { useState,useEffect } from "react";
import {Link, useHistory, useNavigate, useParams } from 'react-router-dom';
import DoctorService from "./services/DoctorService";

const AddDoctorComponent = () =>{
    
    const [did, setDid] = useState('')
    const [name, setName] = useState('')
      const [department, setDepartment] = useState('')
      const [description, setDescription] = useState('')
      const [fee, setFee] = useState('')
      const navigate = useNavigate();
      const {id} = useParams();

      const saveOrUpdateDoctor = (e) => {
          e.preventDefault();
           
          const doctor = {did,name,department,description,fee}



          if(id){
            DoctorService.updateDoctor(id, doctor).then((response) => {
                navigate('/contact')
            }).catch(error => {
                console.log(error)
            })

        }
        else{
          DoctorService.createDoctor(doctor).then((response) =>{
            console.log(response.data)
            
            navigate('../contact');

          }).catch(error => {
            console.log(error)
          })

        }
      }

      useEffect(() => {

        DoctorService.getDoctorById(id).then((response) =>{
            setDid(response.data.did)
            setName(response.data.name)
            setDepartment(response.data.department)
            setDescription(response.data.description)
            setFee(response.data.fee)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Doctor</h2>
        }else{
            return <h2 className = "text-center">Add Doctor</h2>
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
                                    <label className = "form-label">Doctor Id :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Doctor Id"
                                        name = "name"
                                        className = "form-control"
                                        value = {did}
                                        onChange = {(e) => setDid(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Department :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Department"
                                        name = "department"
                                        className = "form-control"
                                        value = {department}
                                        onChange = {(e) => setDepartment(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Description :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter Description"
                                        name = "description"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Fees :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter Fees"
                                        name = "description"
                                        className = "form-control"
                                        value = {fee}
                                        onChange = {(e) => setFee(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDoctor(e)} >Submit </button>
                                <Link to="/contact" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>

   )

}

export default AddDoctorComponent