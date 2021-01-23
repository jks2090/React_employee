import React, { useEffect, useState } from "react"
import Employee from "../employee/employee"
import axios from "axios";

const Home =()=> {
    const [results, setResults] = useState([])
    const [sorted, setSorted] = useState([])
    useEffect(() => {
      axios
        .get("https://randomuser.me/api/?results=30")
        .then( function (response) {
          setResults(response.data.results)
          setSorted(response.data.results)
        })
        .catch(function (error) {
          console.log(error)
        })
        

    }, [])
    const sortFirstName = () => {
      const compare = (a, b) =>{
        return a.first.localeCompare(b.first)
      }
      const sortedEmployees = results.sort(compare)
    }
    
      return (
        
        
    <body>
       <a class="waves-effect waves-light btn-small" onClick= {sortFirstName}>Sort by first name</a>
        
            {results.map(result => (
              <Employee 
              key={result.id.value}
              image={result.picture.thumbnail}
              firstName={result.name.first}
              lastName={result.name.last}
              email={result.email}
              gender={result.gender}
              location={result.location.country}
              />
    
            ))}
    
           
            
          
        
        
    </body>

      )
      }
  
  

export default Home
