import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Container from 'react-bootstrap/Container';
import  './Selectstyle.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TotalSchemeCard from "./TotalSchemeCard.js";
import data from '../api/govt_schemes.json';



export default function SelectDropdown() {

  const [age, setAge] = React.useState('');
  let temp2=[]
  for(let i=0;i<data.length;i++){
      if(data[i]['State']==="All India"){
        temp2.push(data[i]);
      }
  }
  const [schemeData, setschemeData] = React.useState(temp2);

  const handleChange = (event) => {
    setAge(event.target.value);
    let temp = [];
    let temp1 = event.target.value;
    for(let i=0;i<data.length;i++){
      if(data[i]['State']===temp1){
        temp.push(data[i]);
      }
    }
    setschemeData(temp);
  };


  // const returnChange = () =>{
  //   console.log(age);
  // }

  return (
    <>
      <br />
      <Container className="mt-2">
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <div className="container">
              <div className="row">
                <div>
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <select onChange={handleChange} className="selectpicker form-control border-0  px-4 py-4 rounded shadow  select-heading">
                        <option value="" selected disabled hidden>SELECT STATE</option>
                        <option value="All India">All India</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="UP">UP</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Bihar">Bihar</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </Col>
        </Row>
      </Container>

      <br />
      <TotalSchemeCard state={age} data={schemeData} />



    </>
  );
}