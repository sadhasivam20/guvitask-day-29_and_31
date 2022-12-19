import { useFormik } from "formik";
import React from "react";
import axios from 'axios';


function Createuser() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      DOB: "",
      Gender: "",
      Mobileno: "",
      Rollno: "",
      
    },
    validate:(value)=>{
       let errors={};
         if(value.Name===""){
          errors.Name="please enter your name"
         }
        if(value.DOB===""){
          errors.DOB="please enter DOB"
        }
        if(value.Gender===""){
          errors.Gender="Please enter Gender"
        }
        if(value.Mobileno===""){
          errors.Mobileno="please enter your Mobileno"
        }
        if(value.Rollno===""){
          errors.Rollno="please enter Rollno"
        }
       

       return errors;
    },
    onSubmit:async(values)=>{
      let req= await axios.post("https://6283a4ad92a6a5e462271d0a.mockapi.io/student",values)
      console.log(req);
      alert("user created")
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      
      <div className="container">
      <div className="row">
      <h2> Create Student-Form</h2>
        <div className="col-lg-6">
        
          <label>Name</label>
          <input
            className={"form-control"}
            type={"text"}
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
          />
          <span style={{color:"red"}}>{formik.errors.Name}</span>
        </div>
        <div className="col-lg-6">
          <label>DOB</label>
          <input className="form-control" type={"text"}
           value={formik.values.DOB}
           onChange={formik.handleChange}
           name="DOB"
          />
         <span style={{color:"red"}}>{formik.errors.DOB}</span>
        </div>
        <div className="col-lg-6">
          <label>Gender</label>
          <input className="form-control" type={"text"}
           value={formik.values.Gender}
           onChange={formik.handleChange}
           name="Gender"
          />
          <span style={{color:"red"}}>{formik.errors.Gender}</span>
        </div>
        <div className="col-lg-6">
          <label>MobileNo</label>
          <input className="form-control" type={"text"}
           value={formik.values.Mobileno}
           onChange={formik.handleChange}
           name="Mobileno"
          />
        <span style={{color:"red"}}>{formik.errors.Mobileno}</span>
        </div>
        <div className="col-lg-6">
          <label>RollNo</label>
          <input className="form-control" type={"text"}
          value={formik.values.Rollno}
          onChange={formik.handleChange}
          name="Rollno"
          />
        <span style={{color:"red"}}>{formik.errors.Rollno}</span>
        </div>
        <div className="col-lg-6">
          
        </div>
        <div className="container">  
          <div className="row">   
            <button type={"submit"} className="col-lg-1 col-sm-12 m-2 btn btn-primary"
            disabled={formik.isValid?false:true}>   
              Submit      
            </button>     
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default Createuser;