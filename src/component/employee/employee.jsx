import React from "react";

const Employee =({image, firstName, lastName, email, gender, location}) =>{
    return (
        <div>
            
            <table className="table centered table-bordered table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope ="col">Employee Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={image} ></img></td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{location}</td>
          </tr>
          </tbody>
      </table>
          
       
        </div>
    )
    }

export default Employee;
