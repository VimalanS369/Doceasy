import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




const Home = () => {

  


  const feedbacks = [
    {
      id: 1,
      title: 'Arjun Kumar',
      content: 'Great experience! Made a same day appointment using Doceasy and got in right away. ',
      image: './images/feedback (11).jpg',
    },
    {
      id: 2,
      title: 'Thomas Edison',
      content: 'Great service by Doceasy. Easy to use the website. Great features.I always book appointments from Doceasy.',
      image: './images/feedback (2).jpg',
    },
    {
      id: 3,
      title: 'Chelsea David',
      content: 'I am happy with the discounts. I saved almost rupees 300. This is the best appointment booking website.',
      image: './images/feedback (7).jpg',
    },
    {
      id: 4,
      title: 'Alex Jones',
      content: 'Doceasy offers the best doctors with affordable booking fees. I have saved a lot of time and money.',
      image: './images/feedback (8).jpg',
    },
    {
      id: 5,
      title: 'Rachel Robbie',
      content: 'I have been using Doceasy for 3 years now. They are awlays improving and providing new services with better discounts.',
      image: './images/feedback (5).jpg',
    },
    {
      id: 6,
      title: 'Amber Rose',
      content: 'It is easy to book appointments with Doceasy. They offer the best doctors in the town. My search for best Gynecologist ended here.',
      image: './images/feedback (6).jpg',
    },
  ];

  const chunkSize = 3; // Number of cards to display in a single slide

  const chunkFeedbacks = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedFeedbacks = chunkFeedbacks(feedbacks, chunkSize);


    return (
        <div>
          
          <div>
          <Carousel variant=''>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\images\de_pics (5).jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 style={{fontSize:'70px',textShadow:'2px 2px 5px black'}}>First slide label</h1>
              <p style={{fontSize:'25px',textShadow:'2px 2px 5px black'}} >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\images\de_pics (7).jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3 style={{fontSize:'70px',textShadow:'2px 2px 5px black'}}>Second slide label</h3>
              <p style={{fontSize:'25px',textShadow:'2px 2px 5px black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\images\de_pics (3).jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3 style={{fontSize:'70px',textShadow:'2px 2px 5px black'}}>Third slide label</h3>
              <p style={{fontSize:'25px',textShadow:'2px 2px 5px black'}}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          </div>

         <div style={{marginTop:'65px'}}>
         <Container style={{}}>
          <Row>
            <Col class=" my-5 text-center" >
            <p style={{fontSize:'27px' , fontWeight:'300', marginLeft:'270px', marginRight:'270px'}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            </Col>
          </Row>
         </Container>
         </div>
          
           

          <div style={{marginTop:'65px'}}>
             <div><h1 style={{textAlign:'center',fontWeight:'700'}} >OUR EXPERIENCED DOCTORS</h1></div>
          <div style={{marginLeft:'30px',marginTop:'15px',marginRight:'30px'}}>
          <div>
          <CardGroup>
          <Card style={{ width: '15rem', borderRadius:'20px' }}>
            <Card.Img variant="top" src=".\images\doctors (1).jpg" height={'500px'} />
          <Card.Body>
             <Card.Title style={{ fontWeight:'700', fontSize:'25px',color:'green'}}>John David</Card.Title>
                <Card.Text style={{ fontSize:'17px',fontWeight:'500'}}>
                Pediatrician
                </Card.Text>
                   
          </Card.Body>
         </Card>
         <Card style={{ width: '15rem', marginLeft:'10px', marginRight:'10px', borderRadius:'20px'  }}>
            <Card.Img variant="top" src=".\images\doctors (2).jpg" height={'500px'} />
          <Card.Body>
             <Card.Title style={{ fontWeight:'700', fontSize:'25px',color:'green'}} >Mike Blasko </Card.Title>
                <Card.Text style={{ fontSize:'17px',fontWeight:'500'}}>
                Neurologist
                </Card.Text>
                   
          </Card.Body>
         </Card>
         <Card style={{ width: '15rem', marginRight:'10px' , borderRadius:'20px'  }}>
            <Card.Img variant="top" src=".\images\doctors (3).jpg" height={'500px'} />
          <Card.Body>
             <Card.Title style={{ fontWeight:'700', fontSize:'25px',color:'green'}}>Susan Peters</Card.Title>
                <Card.Text style={{ fontSize:'17px',fontWeight:'500'}}>
                Gynecologist
                </Card.Text>
                   
          </Card.Body>
         </Card>
         <Card style={{ width: '15rem' , borderRadius:'20px'  }}>
            <Card.Img variant="top" src=".\images\doctors (4).jpg" height={'500px'}/>
          <Card.Body>
             <Card.Title style={{ fontWeight:'700', fontSize:'25px',color:'green'}}>William Leach</Card.Title>
                <Card.Text style={{ fontSize:'17px',fontWeight:'500'}}>
                Cardiologist
                </Card.Text>
                   
          </Card.Body>
         </Card>
          </CardGroup>

          </div>
          </div>
          </div>
         
          <div>
          <div
        style={{
          height: '200px',
          width: '100%',
          backgroundColor: '#e6e7e4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:'100px',
          fontSize: '37px',
          fontWeight: 'bold'
          
        }}
      >
        <p style={{ color: 'green' }}>Each time a patient finds the right doctor, we build a healthier nation
</p>
      </div>
          </div>
          
          <div style={{marginTop:'150px', marginLeft:'10%', marginRight:'10%'}}>
            <h1 style={{textAlign:'center', marginBottom:'30px', fontWeight:'bold'}}>Patient's Feedback</h1>
          <Carousel interval={3000}>
      {chunkedFeedbacks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="row">
            {chunk.map((feedback) => (
              <div className="col-md-4" key={feedback.id}>
                <Card style={{padding: '10px'}}>
                <div className="image-container">
                    <div className="image-circle">
                      <Card.Img variant="top" src= {feedback.image}  />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title style={{color:'green', fontWeight:'bold'}}>{feedback.title}</Card.Title>
                    <Card.Text>{feedback.content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
          </div>


        </div>

       
      



      );
  };
  
  export default Home;