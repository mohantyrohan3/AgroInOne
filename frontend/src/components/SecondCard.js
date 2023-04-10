import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../App.css'
import veggies from "../images/veggies.jpg"
import images from "../images//images.jpg"
import scheme from "../images/scheme.png";




function SecondCard() {
  return (
    <>
      <Container fluid="md">

        <Row>


          <Col sm={4}>
            <Card className="mt-2 mb-5" id="card-left-bottom">
              <Card.Body>
                <Card.Text className="card-below-text">
                  Welcome to our agriculture website, where we celebrate the beauty and bounty of the farming world. From seed to harvest, we're passionate about sharing the latest trends, tips, and insights that help you cultivate a thriving farm and nourish your community. Come grow with us!
                </Card.Text>
                <Button size="lg" className='home-shop-button' variant="primary">SHOP NOW</Button>

              </Card.Body>
            </Card>


          </Col>





          <Col sm>
            <Card className="mt-2 mb-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="card">
              <Card.Img variant="top" src={veggies} style={{ height: '10rem', }} />
              <Card.Body style={{ height: '18.5rem', overflow: 'scroll' }} className="card-text">
                <Card.Title className="text-center">MARKETPLACE</Card.Title>
                <Card.Text className="card-below-text">
                  Our marketplace is the perfect place to buy and sell farming products. Whether you need seeds, fertilizers, or
                  tools, you'll find everything you need on our marketplace. Plus, you can sell your own goods and harvest, too.

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>




          <Col sm>
            <Card className="mt-2 mb-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="card">
              <Card.Img variant="top" src={scheme} style={{ height: '10rem', }} />
              <Card.Body style={{ height: '18.5rem', overflow: 'scroll' }} className="card-text">
                <Card.Title className="text-center">GOVERMENT-AIDED SCHEMES</Card.Title>
                <Card.Text className="card-below-text">
                  Our government-aided schemes section provides a comprehensive list of all the schemes available to Indian farmers.            We've organized the information into subsections to make it easy for farmers to find the schemes that apply to them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm>
            <Card className="mt-2 mb-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="card">
              <Card.Img variant="top" src={images} style={{ height: '10rem' }} />
              <Card.Body style={{ height: '18.5rem', overflow: 'scroll', }} className="card-text">
                <Card.Title className="text-center">HELPDESK</Card.Title>
                <Card.Text className="card-below-text">
                  Our friendly and knowledgeable help desk is here to assist you with any questions or concerns you may have. We understand that farming can be complex, so we're here to help simplify things. Simply reach out to us via chat or email and we'll get back to you as soon as possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}



export default SecondCard;