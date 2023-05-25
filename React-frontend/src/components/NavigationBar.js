import React from "react";
import {NavDropdown, Navbar, Container, Nav} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
class NavigationBar extends React.Component{
        render(){
            return(
                <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />}/>
        <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="departments" element={<Departments />}/>
        
        </Route>
       
      </Routes>
    </BrowserRouter>

    

          );
        }
}
export default NavigationBar