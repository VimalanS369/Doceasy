import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



const Login = () => {
    return (
       <>
       <div className = "container" style={{marginTop:'200px', textAlign:'center'}}>
        <Link to="/admin-login" style={{textDecoration:'none',marginLeft: '120px',fontSize:'18px',color:'white', width:'185px',textAlign:'center', fontWeight:'600',marginBottom:'25px'}}  className="btn btn-success"> Admin</Link>
        <br></br>
        <Link to="/" style={{textDecoration:'none',marginLeft: '120px',fontSize:'18px',color:'white', width:'185px',textAlign:'center', fontWeight:'600',marginBottom:'25px'}}  className="btn btn-success"> User</Link>
        <br></br>
        {/* <Link to="/" style={{textDecoration:'none',marginLeft: '120px',fontSize:'18px',color:'white', width:'185px',textAlign:'center', fontWeight:'600',marginBottom:'25px'}}  className="btn btn-success"> Doctors</Link>
        */}
        <Outlet/>
       </div>
       </>
    );
  };
  
  export default Login;