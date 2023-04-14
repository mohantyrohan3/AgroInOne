import React from 'react'
import "./pred.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Predictcrop() {
  return (
    <>
    <Container>
      <br/>
      <br/>
    <Row className="justify-content-md-center">
        <Col>
        <div class="form-container">
        <h2>Fill up the details (all details are compulsory to fill)</h2>
        <form method="post" action="/get_selected_value">
            <div class="form-group">
                <label for="myDropdown">State:</label>
                <select class="form-control" id="myDropdown" name="selected_state">
                    <option value="" selected disabled hidden>
                        Select State
                    </option>
                  {/* {% for value in sd %}
                  <option value="{{ value }}">{{ value }}</option>
                  {% endfor %} */}
                </select>
             </div>

             <div class="form-group">
                <label for="myDropdown">District:</label>
                <select class="form-control" id="myDropdown" name="selected_district">
                    <option value="" selected disabled hidden>
                        Select District
                    </option>
                  {/* {% for value in dd %}
                  <option value="{{ value }}">{{ value }}</option>
                  {% endfor %} */}
                </select>
              </div> 

              <div class="form-group">
                <label for="myDropdown">Crop:</label>
                <select class="form-control" id="myDropdown" name="selected_crop">
                    <option value="" selected disabled hidden>
                        Select Crop
                    </option>
                  {/* {% for value in cd %}
                  <option value="{{ value }}">{{ value }}</option>
                  {% endfor %} */}
                </select>
              </div>


              <div class="form-group">
                <label for="myTextarea">Enter Crop Year:</label>
                <textarea class="form-control" id="myTextarea" name="crop_year" rows="1" placeholder="Crop Year"></textarea>
              </div>
              
              <div class="form-group">
                <label for="myDropdown">Season:</label>
                <select class="form-control" id="myDropdown" name="selected_season">
                    <option value="" selected disabled hidden>
                        Select Season
                    </option>
                  {/* {% for value in sed %}
                  <option value="{{ value }}">{{ value }}</option>
                  {% endfor %} */}
                </select>
              </div>

              <div class="form-group">
                <label for="myTextarea">Enter Area:</label>
                
                <textarea class="form-control" id="myTextarea" name="area" rows="1" placeholder="Area"></textarea>
              </div>

              <div class="form-group">
                <label for="myTextarea">Enter Production Value:</label>
                <textarea class="form-control" id="myTextarea" name="Production" rows="1" placeholder="Production"></textarea>
              </div>

            <input type="submit" value="Submit"/>
        </form>

        <br/>
        <p>
          <h3>Yield :</h3>
        </p>
    </div>
        </Col>
      </Row>
    </Container>

    </>
  )
}
