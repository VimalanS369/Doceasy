import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';



const About = () => {
    return(

<>
<div style={{ backgroundColor: '#f7f8f6'}}>
  
<div className="background-image" style={{ backgroundImage: `url('./images/bg (1).jpg')` }}>
      <Container>
        <h1 className="overlay-text">
         We are all about bringing
         transparency in the Indian
         healthcare system</h1>
      </Container>
    </div>


<div style={{ backgroundColor: '#ffffff'}}>
  
<Container style={{marginTop:'100px', padding:'20px', display:'flex'}}>
      <Row>
        <Col md={5}>
          <Image src=".\images\about (1).jpg" fluid />
        </Col>
        <Col md={1}>
           </Col>
        <Col md={6}>
          <h2 style={{fontSize:'37px',fontWeight:'bold',color:'green'}}>About <span style={{color:'black'}}>Us</span> </h2>
          <p style={{fontSize:'23px'}}>
        We are technology driven online solution for all your medical
        needs.Our team of medical experts will accompany you at every
        step.From finding the right doctor and hospital,booking doctor appointments,
        comparing procedure costs to solving your health related queries.
        We strive to continuously improve and develop new services to
        empower and educate patients and their families. Doceasy is here to
        ensure that the right healthcare decisions are made.</p>
        </Col>
      </Row>
    </Container>
</div>

<div style={{ backgroundColor: '#ffffff'}}>
<Container style={{marginTop:'100px', padding:'10px', display:'flex'}}>
<Row>
<Col md={6}>
    <h2 style={{fontSize:'37px',fontWeight:'bold',color:'black'}}>Our <span style={{color:'green'}}>Vision</span> </h2>
    <p style={{fontSize:'23px'}}>
    We envision a healthcare ecosystem where people from around the world
can quickly find credible and reliable answers to their medical
problems along with easy access to the best healthcare experts to
guide them towards a healthier, happier and more fulfilling life. We
aim to be the first port of call for customers having healthcare
related need, doubt, or query.</p>
  </Col>
  
  <Col md={1}>
     </Col>

     <Col md={5}>
    <Image src=".\images\about (2).jpg" fluid />
  </Col>
  
</Row>
</Container>
</div>

<div style={{marginTop:'100px',backgroundColor: '#ffffff', padding:'20px'}}>
<Container>
      <Row>
        <Col md={4}>
          <div className="text-center">
            <img src="./images/icon (6).png" alt="Image 1" className="rounded-circle small-image" />
            <p style={{fontSize:'20px'}}> <span style={{ fontWeight:'bold'}}>400+</span> Patients have used Doceasy</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <img src="./images/icon (4).png" alt="Image 2" className="rounded-circle small-image" />
            <p style={{fontSize:'20px'}}> <span style={{ fontWeight:'bold'}}>15+</span> Hospitals in Pondicherry</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <img src="./images/icon (7).png" alt="Image 3" className="rounded-circle small-image" />
            <p style={{fontSize:'20px'}}> <span style={{ fontWeight:'bold'}}>100+</span > Specialised Doctors</p>
          </div>
        </Col>
      </Row>
    </Container>
</div>
</div>


</>
     
    );
  };
  
  export default About;