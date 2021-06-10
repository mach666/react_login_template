import React, { useState } from "react";
import {Button,Alert,Input, InputGroup,Badge} from 'reactstrap'

import "./logIn.css";

function LoginForm() {

//Component`s state
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Errors,setErrors]=useState(null)

// Form Validation Function
  const validate = (email) =>{
    let errors 
   if (!email) { errors = 'Please Enter Email'}
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
    {errors = 'Please Enter Valid Email';}
   return errors;
 }

  const onSubmits = (e) => {
    e.preventDefault();
    const validationErrors = validate(email)

    if(validationErrors){
      setErrors(validationErrors)
    }else{
      console.log(`Email:${email},Password:${pass}`)
      
// -----Onsubmit logic goes here. eg API calling,state mutation, function call etc -----
// -----It is recommended that error messages obtained from any API call should be shown through the same alert through which the validation error messages are show
//-------It is considered to be a good practice


    }
    
    
  };



  return (
     <div className ="center">
        <form onSubmit={onSubmits}>
          
            <h2> <Badge color="light">LOGIN</Badge></h2>
  {Errors!==null?<Alert color="danger">{Errors}</Alert>:null}
            <div className="form-group">
           <InputGroup size='lg'>
           <Input
              type="text"
              placeholder="Email"
              onChange={(e) => {setErrors(null);setEmail(e.target.value)}}
              value={email}
              className="form-control"
            />
           </InputGroup>
            </div>
            
            <div className="form-group">
           <InputGroup size='lg'>
           <Input 
              type="password"
              placeholder="Password"
              onChange={(e) => {setErrors(null);setPass(e.target.value)}}
              value={pass}
              className="form-control"
            />
           </InputGroup>
            </div>
            <br />
            <Button color="warning" type="submit"  >
              SUBMIT
            </Button>
          
        </form>
        </div>
  );
}

export default LoginForm;
