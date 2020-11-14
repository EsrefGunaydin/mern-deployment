import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const OnePirate = props => {

    const [ featOne, setFeatOne ] = useState("Yes")
    const [ featTwo, setFeatTwo ] = useState("Yes")
    const [ featThree, setFeatThree ] = useState("Yes")

    const { id } = props

    const [pirate, setPirate] = useState({
        name: '',
        img_url: '',
        treasures: '',
        phrase:'',
        position:'',
        feature1:'',
        feature2:'',
        feature3:''
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + id)
            .then(response => setPirate(response.data.data))
            .catch(err => console.log(err));
    }, [id])


    const clickHandlerOne = () => {
        if (featOne === "Yes"){
            setFeatOne("No")

        } else {
            setFeatOne("Yes")

        }
    }

    const clickHandlerTwo = () => {
        if (featTwo === "Yes"){
            setFeatTwo("No")
        } else {
            setFeatTwo("Yes")

        } 
    }

    const clickHandlerThree = () => {
        if (featThree === "Yes"){
            setFeatThree("No")

            } else {
                setFeatThree("Yes")

            }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <h3>{pirate.name}</h3>
            </nav>
            <div className="row">
                <div className="col-6">
                    <img src={pirate.img_url} style={{width: "18rem"}}/>
                    <h2>{pirate.phrase}</h2>
                </div>
                <div className="col-6">
                    <h4>About Pirate</h4>
                        <p>Positon: {pirate.position}</p>
                        <p>Treasures: {pirate.treasures}</p>
                        <p>Peg Leg: {featOne}
                        <button onClick={clickHandlerOne} className="m-2">{featOne}</button>
                        </p>
                        <p>Eye Patch: {featTwo}
                        <button onClick={clickHandlerTwo} className="m-2">{featTwo}</button>
                        </p>
                        <p>Hook Hand: {featThree}
                        <button onClick={clickHandlerThree} className="m-2">{featThree}</button>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default OnePirate
