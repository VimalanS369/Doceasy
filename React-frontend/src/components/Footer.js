import React, { useState, useEffect } from "react";
import { Navbar,Col} from "react-bootstrap";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
 

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  

  return (
    <Navbar fixed="" bg="dark" variant="light" style={{marginTop: "570px" }}>
     
     <Box>
    <h1 style={{ color: "green", 
                 textAlign: "center", 
                  marginBottom:'40px', fontWeight:'bold', textShadow: '1px 0px 2px #FFFFFF'}}>
      DoceasY
    </h1>
    <Container>
      <Row style={{ display: 'grid', gridTemplateColumns: '50% 25% 25%' }}>
        <Column >
          <Heading>About Us</Heading>
            <FooterLink ><p>Doceasy is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>
        </FooterLink>
          {/* <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink> */}
        </Column>
        
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">Uttar Pradesh</FooterLink>
          <FooterLink href="#">Ahemdabad</FooterLink>
          <FooterLink href="#">Indore</FooterLink>
          <FooterLink href="#">Mumbai</FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>
                Twitter
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>
                Youtube
              </span>
            </i>
          </FooterLink>
        </Column>
      </Row>
      <Col lg={12} className="text-center text-muted" style={{textAlign:'center'}}>
      
          {fullYear} - {fullYear + 1},  All Rights Reserved by Doceasy Pvt.Ltd
        
      </Col>
    </Container>
  </Box>

        <Col >
          
        </Col>
     
    </Navbar>
    
  );
};

export default Footer;