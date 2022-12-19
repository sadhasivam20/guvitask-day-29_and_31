import { useFormik } from "formik";
import Product from "./product";
import axios from 'axios';
function Createprod() {
   
   const formik=useFormik({
     initialValues:{
        Name:"",
        DOB:"",
        Gender:"",
        Mobileno:"",
        Jobtype:"",
     },
     validate:(values)=>{
        let errors={}
         if(values.Name===""){
            errors.Name="please enter Name"
         }
         if(values.DOB===""){
            errors.DOB="please enter DOB"
         }
         if(values.Gender===""){
            errors.Gender="please enter Gender"
         }
         if(values.Mobileno===""){
            errors.Mobileno="please enter Mobileno"
         }
         if(values.Jobtype===""){
            errors.Jobtype="please enter Jobtype"
         }

        return errors;
     },
     onSubmit:async(values)=>{
       let pro= await axios.post("https://6283a4ad92a6a5e462271d0a.mockapi.io/teacher",values)
       alert("teacher created")
       console.log(pro.data)
     },
});

return (
    <form onSubmit={formik.handleSubmit}>
        <h2 className="d-flex justify-content-center"> Create Teacher-Form</h2>
    <div className="container">
      <div className="row">
       
        <div className="col-lg-6">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Teacher Name
            </label>
            <input type={"text"} className="form-control" 
            value={formik.values.Name} 
            onChange={formik.handleChange}
            name="Name"
            />
            <span style={{color:"red"}}>{formik.errors.Name}</span>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              DOB
            </label>
            <input type={"text"} className="form-control"
            value={formik.values.DOB}
            onChange={formik.handleChange}
            name="DOB"
            />
            <span style={{color:"red"}}>{formik.errors.DOB}</span>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Gender
            </label>
            <input type={"text"} className="form-control"
              value={formik.values.Gender}
              onChange={formik.handleChange}
              name="Gender"
            />
             <span style={{color:"red"}}>{formik.errors.Gender}</span>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Mobileno
            </label>
            <input type={"text"} className="form-control"
            value={formik.values.Mobileno}
            onChange={formik.handleChange}
            name="Mobileno"
            />
             <span style={{color:"red"}}>{formik.errors.Mobileno}</span>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Jobtype
            </label>
            <input type={"text"} className="form-control"
            value={formik.values.Jobtype}
            onChange={formik.handleChange}
            name="Jobtype"
            />
             <span style={{color:"red"}}>{formik.errors.Jobtype}</span>
          </div>
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

export default Createprod;