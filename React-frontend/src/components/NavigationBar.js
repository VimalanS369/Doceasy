import React from "react";
import {NavDropdown, Navbar, Container, Nav} from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";

class NavigationBar extends React.Component{
        render(){
            return(
                <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
          
        </Route>
       
      </Routes>
    </BrowserRouter>

    

          );
        }
}
export default NavigationBar