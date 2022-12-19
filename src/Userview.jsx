import axios from 'axios';
import React, { useEffect, useState } from 'react'                                    
import { useParams } from 'react-router-dom';               

function Userview() {                                      
  
    const params =useParams();      //Alhamdullilah                 
     console.log(params.userviewid); 
     const [userData, setUserData]=useState({});
   
     


    useEffect(()=>{
      Loaduser();
    },[])   

     let Loaduser=async()=>{   
    try{  
      
     let user= await axios.get(`https://6283a4ad92a6a5e462271d0a.mockapi.io/student/${params.userviewid}`)
      setUserData(user.data)
    
     }catch(error){    
          
     }
     }
    return ( 
        <>    
          <h1 className='d-flex justify-content-center'>Studentview:-{params.userviewid}</h1>                                                            
         <div className="container offset-5 mt-5">
         <h3>Name:{userData.Name}</h3>   
         <h3>DOB:{userData.DOB}</h3> 
         <h3>Gender:{userData.Gender}</h3> 
         <h3>Mobileno:{userData.Mobileno}</h3>     
         <h3>RollNo:{userData.Rollno}</h3>
         </div>
       </>                      
                                                  
     )
    // const [timer,setTimer]= useState(0);
    // useEffect(()=>{
    //     console.log("hello");
    //     let sum = fetch ("https://6283a4ad92a6a5e462271d0a.mockapi.io/users")
    //  .then(()=>{console.log(sum)})
    // },[])
   
    // useEffect(()=>{
    //    console.log('timer update')
    // },[timer])

    // useEffect(()=>{
    //     console.log('destroy')
    // })

    // return(
    //    <>
    //    <button onClick={()=>setTimer(timer+1)}>+</button>
    //    <span>{timer}</span>
    //    <button onClick={()=>setTimer(timer-1)}>-</button>
    //    </>
    // )
}                                                                           
  
export default Userview;        