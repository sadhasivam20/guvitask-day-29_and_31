import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


function Edituser() {
  const params=useParams();
  // console.log(params.userviewid)
  const navigate = useNavigate();
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
      console.log(values)
      await axios.put(`https://6283a4ad92a6a5e462271d0a.mockapi.io/student/${params.id}`,values)
      // alert('user updated')
      navigate("/portal/student")
    }
   });
   useEffect(()=>{
     
     Loaduser();
},[])

   let Loaduser=async()=>{
    try{
    let user= await axios.get(`https://6283a4ad92a6a5e462271d0a.mockapi.io/student/${params.id}`)
      formik.setValues({
        Name:user.data.Name,
        DOB:user.data.DOB,
        Gender:user.data.Gender,
        Mobileno:user.data.Mobileno,
        Rollno:user.data.Rollno,
       
      })
    }catch(error){
      
    }
   }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <label>Name</label>
          <input
            class={"form-control"}
            type={"text"}
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
          />
          <span style={{color:"red"}}>{formik.errors.Name}</span>
        </div>
        <div class="col-lg-6">
          <label>DOB</label>
          <input class="form-control" type={"text"}
           value={formik.values.DOB}
           onChange={formik.handleChange}
           name="DOB"
          />
         <span style={{color:"red"}}>{formik.errors.DOB}</span>
        </div>
        <div class="col-lg-6">
          <label>Gender</label>
          <input class="form-control" type={"text"}
           value={formik.values.Gender}
           onChange={formik.handleChange}
           name="Gender"
          />
          <span style={{color:"red"}}>{formik.errors.Gender}</span>
        </div>
        <div class="col-lg-6">
          <label>MobileNo</label>
          <input class="form-control" type={"text"}
           value={formik.values.Mobileno}
           onChange={formik.handleChange}
           name="Mobileno"
          />
        <span style={{color:"red"}}>{formik.errors.Mobileno}</span>
        </div>
        <div class="col-lg-6">
          <label>RollNo</label>
          <input class="form-control" type={"text"}
          value={formik.values.Rollno}
          onChange={formik.handleChange}
          name="Rollno"
          />
        <span style={{color:"red"}}>{formik.errors.Rollno}</span>
        </div>
        <div class="col-lg-6">
          
        </div>
        <button type={"submit"} 
        className="btn btn-primary ms-3 mt-3 col-lg-1"
        disabled={formik.isValid?false:true}
        >
          Submit
        </button>
      </div>
    </div>
    </form>
  );
}

export default Edituser;