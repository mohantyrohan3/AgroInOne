import * as React from 'react';
import  "./Schemecard.css"
import Container from 'react-bootstrap/Container';
import SchemeCard from "./SchemeCard.js"
import SchemeCard1 from "./SchemeCard1.js"


export default function SelectDropdown(props) {

  let lengthdata = props.data.length;
  let arr = [];
  let arr2 = props.data;
  for (let i = 0; i < lengthdata; i++) {
    arr.push(i);
  }
  let heading;
  if (props.state===""){
    heading=<h1 className='scheme-heading'>All India</h1>  
  }
  else{
    heading=<h1 className='scheme-heading'>{props.state}</h1>
  }
  
  return (
    <>

      <Container>
        {heading}
      </Container>
    <br/>
    {arr2.map((element, index) => {
        if (index % 2 === 0) {
          return <SchemeCard data={element} />;
        }

        return <SchemeCard1 data={element} />;
      })}
    </>
  );



}