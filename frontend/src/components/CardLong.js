import React from 'react'
import Card from 'react-bootstrap/Card';
import image from "../images/image.png"
import Container from 'react-bootstrap/Container';
import  '../App.css'
import { Wave } from 'react-animated-text';




function CardLong() {
  return (
    <>
      <Container>
        <Card className="bg-dark text-black">
          <Card.Img src={image} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title id="long-card-title" className="fs-2 mt-1"><Wave text="HARVESTING.  HEALTH.  HAPPINESS" /></Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
}



export default CardLong;