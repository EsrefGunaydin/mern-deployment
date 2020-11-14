import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PirateCard from '../components/PirateCard'
import { Link } from '@reach/router'

const AllPirates = () => {

   const [pirates, setPirates] = useState([])

   useEffect(() => {

    axios.get('http://localhost:8000/api/pirates')
        .then(response => setPirates(response.data.data))
        .catch(err => console.log(err));
   },[pirates])

    return (
        <div className="container m-5">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                    <Link to="/pirate/new">Add New Pirate</Link>  |  
                    <Link to="/register">Register</Link> |
                    <Link to="/login">Login</Link>
                </nav>
            </div>
            {
                pirates.map((item, i) => <PirateCard key={i} pirate={item}/>)
            }
            {console.log(pirates)}
        </div>
    )
}

export default AllPirates
