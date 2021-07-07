import React from 'react'
//import { Redirect } from 'react-router-dom'
import Ab from "./Ab.json"
  
const About=()=>{
    
    return(
        <>
        <div>
            <h1> Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>email</th>
                        </tr>
                </thead>
                <tbody>
                    
                    {Ab.map((res,id)=>{
                return <tr key={id}>
                    <td>{res.name}</td>
                  <td> {res.age}</td>
                  <td> {res.gender}</td>
                  <td> {res.email}</td>
                  
                  </tr>
                  

            })}
                      
                </tbody>
           
            </table>
            </div>
        </>
    )

}
export default About