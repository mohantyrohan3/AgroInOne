import React, { useState } from 'react'
import "./pred.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import state from "../../api/state.json"
import district from "../../api/district.json"
import crop from "../../api/crop.json"
import season from "../../api/season.json";
import Button from 'react-bootstrap/Button';
import { PredictCrop } from '../../api/predictcrop';


let state_data = Object.keys(state)
let district_data = Object.keys(district)
let crop_data = Object.keys(crop)
let season_data = Object.keys(season)







export default function Predictcrop() {

const [State, setState] = useState();
const [District, setDistrict] = useState();
const [Crop, setCrop] = useState();
const [Year, setYear] = useState();
const [Season, setSeason] = useState();
const [Area, setArea] = useState();
const [Production, setProduction] = useState();
const [Ans, setAns] = useState();


const handleClick = async ()=>{

  let ans = {
    "selected_state":State,
    "selected_district":District,
    "selected_crop":Crop,
    "crop_year":Year,
    "selected_season":Season,
    "area":Area,
    "Production":Production
  }

  try{
    let temp = await PredictCrop(ans);
    // console.log(Ans);
    setAns(temp.answer);
  }
  catch(error){
    console.log(error)
  }
}







  return (
    <>
    <Container>
      <h1 className='h1-pred-crop'>CROP YIELD PREDICTION</h1>
      <br/>
      <br/>
    <Row className="justify-content-md-center">
        <Col>
        <div class="form-container">
        <h2>Fill up the details (all details are compulsory to fill)</h2>
            <div class="form-group">
                <label for="myDropdown">State:</label>
                <select class="form-control" id="myDropdown" name="selected_state" onChange={(e)=>{
                  setState(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select State
                    </option>
                    {state_data.map((element, index) => {
                      return <option value={element}>{element}</option>
                    })}
                </select>
             </div>

             <div class="form-group">
                <label for="myDropdown">District:</label>
                <select class="form-control" id="myDropdown" name="selected_district" onChange={(e)=>{
                  setDistrict(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select District
                    </option>
                    {district_data.map((element, index) => {
                      return <option value={element}>{element}</option>
                    })}
                </select>
              </div> 


              <div class="form-group">
                <label for="myDropdown">Crop:</label>
                <select class="form-control" id="myDropdown" name="selected_crop" onChange={(e)=>{
                  setCrop(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select Crop
                    </option>
                    {crop_data.map((element, index) => {
                      return <option value={element}>{element}</option>
                    })}
                </select>
              </div>


              <div class="form-outline mb-2" >
                <label class="form-label" for="typeNumber">Enter Crop Year</label>
                <input value={Year} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setYear(e.target.value)
                }}/>
              </div>
              
              <div class="form-group">
                <label for="myDropdown">Season:</label>
                <select class="form-control" id="myDropdown" name="selected_season" onChange={(e)=>{
                  setSeason(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select Season
                    </option>
                    {season_data.map((element, index) => {
                      return <option value={element}>{element}</option>
                    })}
                </select>
              </div>

              <div class="form-outline mb-1" >
                <label class="form-label" for="typeNumber">Enter Area</label>
                <input value={Area} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setArea(e.target.value)
                }}/>
              </div>

        
              <div class="form-outline mb-2" >
                <label class="form-label" for="typeNumber">Enter Production Value</label>
                <input value={Production} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setProduction(e.target.value)
                }}/>
              </div>

              <Button variant="primary mb-2 mt-2" onClick={handleClick}>Submit</Button>

        <br/>
        <p>
          <h3>Yield : {Ans}</h3>
        </p>
    </div>
        </Col>
      </Row>
    </Container>

    </>
  )
}
