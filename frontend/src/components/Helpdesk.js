import * as React from 'react';
import Container from 'react-bootstrap/Container';
import  './helpdesk.css';
import {getHelpdeskdata} from '../api/helpdesk';
import Helpdeskcard from "./Helpdeskcard";









export default function Helpdesk() {
  const [age, setAge] = React.useState('');
  const [Data, setData] = React.useState("");


  const handleClick = async ()=>{
    try{
      let response = await getHelpdeskdata(age);
      setData(response);
    }
    catch(error){
      console.log(error)
    }
  }

  const handleChange = (event)=>{
    setAge(event.target.value);
  }




  return (
    <>
      <br />
      <br /><br /><br />
      <Container>
        <div className="container">
          <div className="search">
            <div className="row">
              <div className="col">
                <div className="search-1">
                  <input onChange={handleChange} type="text" placeholder="Ask me Anything" />
                </div>
              </div>
            </div>
          </div>
        </div>




        <br />
        <div className="d-flex justify-content-center">
          <button onClick={handleClick} className="button">Search</button>
        </div>

        <br />

        <Helpdeskcard Data={Data}/>






      </Container>

    </>
  );
}