import React from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const PirateCard = props => {

    const { pirate } = props

    const deleteHandler = id => {
            axios.delete("http://localhost:8000/api/pirate/" + id )
                .then(response => navigate('/pirates'))
                .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-left" src={pirate.img_url} style={{width:"18rem"}}></img>
                    <div className="card-body">
                        <h5 className="card-title">{pirate.name}</h5>
                        <Link className="btn btn-primary m-1" to={"/pirate/" + pirate._id}>View Pirate</Link>
                        <button className="warning" onClick={()=>deleteHandler(pirate._id)}>Walk the Plank</button>
                    </div>
                </div>
        </div>
    )
}

export default PirateCard
