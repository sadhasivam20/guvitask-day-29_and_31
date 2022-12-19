import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Product() {
  
//  const data=[
//     {
//   id:1,
//   Product:"briyani",
//   Price:"160",
//   Available:"2.30p.m",
//   Hotel:"yamohideen",
//   City:"chennai",

//  },
//  {
//     id:2,
//     Product:"dosa",
//     Price:"160",
//     Available:"8.30p.m",
//     Hotel:"adyar bhavan",
//     City:"chennai",
  
//    }
// ]
 const [data,setData]=useState([]);
 const[isLoading,setLoading]=useState(false)
 
    useEffect(()=>{
      Loaddata();
      
    },[])
    let Loaddata= async()=>{
        setLoading(true)
        let user= await axios.get(`https://6283a4ad92a6a5e462271d0a.mockapi.io/teacher`)
        setData(user.data)
        setLoading(false)
    }

    let prodDelete=async(identity)=>{
    try{
        let ask=window.confirm("Are you sure want to Delete")
      if(ask){
          await axios.delete(`https://6283a4ad92a6a5e462271d0a.mockapi.io/teacher/${identity}`)
        Loaddata();
      }
    }catch(errors){

       }
    } 
    return (
        <>
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Teacher</h1>
              <Link to="/portal/create-teacher" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Create Teacher</Link>
          </div>
          {
            isLoading?<div class="text-center">
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>:<div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>MobileNo</th>
                                <th>Jobtype</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>MobileNo</th>
                                <th>Jobtype</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                              {/* <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td> */}
                          {
                              data.map((ele,index)=>{
                                return <tr>
                                  <td>{index+1}</td>
                                  <td>{ele.Name}</td>
                                  <td>{ele.DOB}</td>
                                  <td>{ele.Gender}</td>
                                  <td>{ele.Mobileno}</td>
                                  <td>{ele.Jobtype}</td>
                                  <td>
                                  <Link to={`/portal/teacherview/${ele.id}`} type="button" className="btn btn-secondary">Read</Link>
                                  <Link to={`/portal/teacheredit/${ele.id}`} type="button" className="btn btn-info m-2">Update</Link>
                                  <button onClick={()=>{prodDelete(ele.id)}} type="button" className="btn btn-danger">Delete</button>
                                  </td>
                                  </tr> 

                              })
                          }
                               
        
                            
        
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
          }
          
      </div>
      </>
        )
}

export default Product;