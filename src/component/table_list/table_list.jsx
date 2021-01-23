import React, { useEffect, useState } from "react"
import Employee from "../employee/employee"
import axios from "axios";

const Home =()=> {
    const [results, setResults] = useState([])
    useEffect(() => {
      axios
        .get("https://randomuser.me/api/?results=30")
        .then( function (response) {
          setResults(response.data.results)
          
        })
        .catch(function (error) {
          console.log(error)
        })
        

    }, [])
    
    
      return (
        
        
    <body>
       <a class="waves-effect waves-light btn-small">Sort by gender</a>
        
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
