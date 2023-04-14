import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



export default function PredictLoan() {














  
  return (
   <>
    <Container>
    <h1 className='h1-pred-crop'>LOAN APPROVAL PREDICTION</h1>
      <br/>
      <br/>
    <div className="form-container">
        <h2>Fill up the details (all details are compulsory to fill)</h2>
        
      
            <div className="form-group">
            <label for="exampleFormControlInput1">Enter Loan ID</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Loan ID (Ex: LP00xxxx)" />
              
            </div>




            <div className="form-group">
                <label for="myDropdown">Gender:</label>
                
                <select className="form-control" id="myDropdown" name="gender">
                    <option value="" selected disabled hidden>
                        Select Gender
                    </option>
                  
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>

                  
                </select>
             </div>







             <div className="form-group">
                <label for="myDropdown">Marital Status:</label>
               
                <select className="form-control" id="myDropdown" name="married">
                    <option value="" selected disabled hidden>
                        Select Marital Status
                    </option>
                  
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>

                </select>
              </div> 







              <div className="form-group">
                <label for="myDropdown">No of Dependents:</label>
               
                <select className="form-control" id="myDropdown" name="dependent">
                    <option value="" selected disabled hidden>
                        People dependent on your income
                    </option>
                  
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>







              
              <div className="form-group">
                <label for="myDropdown">Education Level:</label>
               
                <select className="form-control" id="myDropdown" name="education">
                    <option value="" selected disabled hidden>
                        Select education
                    </option>
                  <option value="Graduate">Graduate</option>
                  <option value="Not Graduate">Not Graduate</option>
                  
                </select>
              </div>








              <div className="form-group">
                <label for="myDropdown">Are you self Employed?</label>
               
                <select className="form-control" id="myDropdown" name="self_emp">
                    <option value="" selected disabled hidden>
                        Self Employed status
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  
                </select>
              </div>  






               
              <div className="form-group">
               
              <label class="form-label" for="typeNumber">Enter your income:</label>
                <input value="1000" type="number" id="typeNumber" class="form-control" />
              </div>






              <div className="form-group">
              <label class="form-label" for="typeNumber">Enter your partner/co-applicant income:</label>
                <input value="1000" type="number" id="typeNumber" class="form-control" />
                
              </div>






              <div className="form-group">
              <label class="form-label" for="typeNumber">Enter Loan amount:</label>
                <input value="1000" type="number" id="typeNumber" class="form-control" />
              </div>



              


              <div className="form-group">
                <label class="form-label" for="typeNumber">Enter term of loan in months:</label>
                <input value="1000" type="number" id="typeNumber" class="form-control" />
              </div>






              <div className="form-group">
                <label for="myDropdown">Status of credit</label>
                
                <select className="form-control" id="myDropdown" name="credit_history">
                    <option value="" selected disabled hidden>
                        Any dues left or completed?
                    </option>
                
                  <option value="No dues">No dues</option>
                  <option value="Dues left">Dues left</option>
            
                </select>
              </div>  






              <div className="form-group">
                <label for="myDropdown">Type of area of property:</label>
               
                <select className="form-control" id="myDropdown" name="prop_area">
                    <option value="" selected disabled hidden>
                        Property Area Type
                    </option>
                
                  <option value="Urban">Urban</option>
                  <option value="Rural">Rural</option>
                  <option value="Semiurban">Semiurban</option>
                  
                </select>
              </div>  





              <Button variant="primary mb-2 mt-2">Submit</Button>

              <br/> 
  

        <br/>
        <p>
          <h3>Loan Status :</h3>
        </p>
    </div>








    </Container>
   
   
   </>
  )
}
