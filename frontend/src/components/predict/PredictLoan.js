import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



export default function PredictLoan() {


const [Gender, setGender] = useState("");
const [Married, setMarried] = useState("");
const [Dependent, setDependent] = useState("");
const [Education, setEducation] = useState("");
const [SelfEmp, setSelfEmp] = useState("");
const [ApInc, setApInc] = useState();
const [CoInc, setCoInc] = useState();
const [LoanAmount, setLoanAmount] = useState();
const [Loanterm, setLoanterm] = useState("");
const [Credithistory, setCredithistory] = useState("");
const [Area, setArea] = useState("");














  return (
   <>
    <Container>
    <h1 className='h1-pred-crop'>LOAN APPROVAL PREDICTION</h1>
      <br/>
      <br/>
    <div className="form-container">
        <h2>Fill up the details (all details are compulsory to fill)</h2>
        
      
            {/* <div className="form-group">
            <label for="exampleFormControlInput1">Enter Loan ID</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Loan ID (Ex: LP00xxxx)" />
              
            </div> */}




            <div className="form-group">
                <label for="myDropdown">Gender:</label>
                
                <select className="form-control" id="myDropdown" name="gender" onChange={(e)=>{
                  setGender(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select Gender
                    </option>
                  
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>

                  
                </select>
             </div>







             <div className="form-group">
                <label for="myDropdown">Marital Status:</label>
               
                <select className="form-control" id="myDropdown" name="married" onChange={(e)=>{
                  setMarried(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select Marital Status
                    </option>
                  
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>

                </select>
              </div> 







              <div className="form-group">
                <label for="myDropdown">No of Dependents:</label>
               
                <select className="form-control" id="myDropdown" name="dependent" onChange={(e)=>{
                  setDependent(e.target.value)
                }}>
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
               
                <select className="form-control" id="myDropdown" name="education" onChange={(e)=>{
                  setEducation(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Select education
                    </option>
                  <option value="Graduate">Graduate</option>
                  <option value="Not Graduate">Not Graduate</option>
                  
                </select>
              </div>








              <div className="form-group">
                <label for="myDropdown">Are you self Employed?</label>
               
                <select className="form-control" id="myDropdown" name="self_emp" onChange={(e)=>{
                  setSelfEmp(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Self Employed status
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  
                </select>
              </div>  






               
              <div className="form-group">
               
              <label class="form-label" for="typeNumber">Enter your income:</label>
                <input value={ApInc} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setApInc(e.target.value)
                }} />
              </div>






              <div className="form-group">
              <label class="form-label" for="typeNumber">Enter your partner/co-applicant income:</label>
                <input value={CoInc} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setCoInc(e.target.value)
                }} />
                
              </div>






              <div className="form-group">
              <label class="form-label" for="typeNumber">Enter Loan amount:</label>
                <input value={LoanAmount} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setLoanAmount(e.target.value)
                }}/>
              </div>



              


              <div className="form-group">
                <label class="form-label" for="typeNumber">Enter term of loan in months:</label>
                <input value={Loanterm} type="number" id="typeNumber" class="form-control" onChange={(e)=>{
                  setLoanterm(e.target.value)
                }} />
              </div>






              <div className="form-group">
                <label for="myDropdown">Status of credit</label>
                
                <select className="form-control" id="myDropdown" name="credit_history" onChange={(e)=>{
                  setCredithistory(e.target.value)
                }}>
                    <option value="" selected disabled hidden>
                        Any dues left or completed?
                    </option>
                
                  <option value="No dues">No dues</option>
                  <option value="Dues left">Dues left</option>
            
                </select>
              </div>  






              <div className="form-group">
                <label for="myDropdown">Type of area of property:</label>
               
                <select className="form-control" id="myDropdown" name="prop_area" onChange={(e)=>{
                  setArea(e.target.value)
                }}>
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
