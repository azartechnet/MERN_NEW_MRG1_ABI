import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios';
function CrudPage()
{
   const [foodName,setFoodName]=useState("");
   const [description,setDescription]=useState("");
   // useEffect(()=>{
   //    fetchData();
   // },[])
   //inserted
   const addFoodData=()=>{
      Axios.post("http://localhost:3001/insert",{foodName,description})
      .then((response)=>{
         console.log(response)
      })
      .catch((err)=>{
         console.log(err)
      })
   }
    return(
       <div className="container">
          <h1>CRUDPage</h1>
          <div className="mb-3">
             <input type="text"
             className="form-control"
             placeholder="FoodName"
             required
             onChange={(e)=>setFoodName(e.target.value)}/>
             <input type="text" 
             className="form-control"
             placeholder="Food Description"
             required
             onChange={(e)=>setDescription(e.target.value)}/>
          </div>
          <button className="btn btn-primary" onClick={addFoodData}>AddFood</button>
          <h3 className="mt-4">Get Data From DataBase</h3>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>FoodName</th>
                <th>FoodDescription</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
               <tr>
                  <td>Apple</td>
                  <td>Good</td>
                  <td>
                     <input type="text" placeholder="UpdateFoodName"/>
                     <button className="btn btn-primary" onClick={""}>Update</button>
                  </td>
                  <td><button className="btn btn-danger" onClick={""}>Delete</button></td>
               </tr>
              </tbody>
          </table>
       </div>
       
    )
}
export default CrudPage;