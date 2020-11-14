import React, { useState } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router'

const PirateForm = () => {

        const [pirate, setPirate] = useState({
            name: '',
            img_url: '',
            treasures: '',
            phrase:'',
            position:'',
            feature1: true,
            feature2: true,
            feature3: true
        });
        const [errors, setErrors] = useState({
            name: '',
            img_url: '',
            treasures: '',
            phrase:'',
            position:'',
            feature1:'',
            feature2:'',
            feature3:''
        });
    
        const changeHandler = e => {
            setPirate({
                ...pirate,
                [e.target.name]: e.target.value
            })
        }
    
        const submitHandler = e => {
            e.preventDefault();
            console.log(pirate)
            axios.post("http://localhost:8000/api/pirates", pirate)
                .then(response => {
                    const res = response.data;
                    if(res.message === "success"){
                        navigate("/pirates");
                    } else {
                        setErrors(res.data.errors);
                    }
                })
                .catch(err => console.log(err));
                
        }

    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                    <Link to="/pirates">Crew Board</Link>
                </nav>
            </div>
            <form onSubmit={ submitHandler } className="col-sm-10 offset-sm-1 mt-4">
            <div className="form-group row">
                {
                    errors.name ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.name.message }</span>:
                    <span className="col-sm-12"></span>
                }
                <label htmlFor="name" className="col-sm-4">Pirate Name: </label>
                <input type="text" name="name" className="col-sm-8 form-control" onChange={ changeHandler } />
            </div>
            <div className="form-group row">
                {
                    errors.img_url ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.img_url.message }</span>:
                    <span className="col-sm-12"></span>
                }
                <label htmlFor="img_url" className="col-sm-4">Image Url: </label>
                <input type="text" name="img_url" className="col-sm-8 form-control" onChange={ changeHandler }/>
            </div>
            <div className="form-group row">
                {
                    errors.treasures ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.treasures.message }</span>:
                    <span className="col-sm-12"></span>
                }
                <label htmlFor="treasures" className="col-sm-4">No. of Treasure Chests: </label>
                <input type="number" name="treasures" className="col-sm-8 form-control" onChange={ changeHandler } />
            </div>
            <div className="form-group row">
                {
                    errors.phrase ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.phrase.message }</span>:
                    <span className="col-sm-12"></span>
                }
                <label htmlFor="phrase" className="col-sm-4">Pirate Catch Phrase: </label>
                <input type="text" name="phrase" className="col-sm-8 form-control" onChange={ changeHandler } />
            </div>
            <div className="form-group row">
                {
                    errors.position ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{ errors.position.message }</span>:
                    <span className="col-sm-12"></span>
                }
                <label htmlFor="position" className="col-sm-4">Crew Position: </label>
                <select name="position" id="position" onChange={ changeHandler }>
                    <option >...</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatsmain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </div>
            <div className="form-group">
                    <input type="checkbox" name="feature1" defaultChecked={pirate.feature1}  />
                    <p>Peg Leg</p>
            </div>
            <div className="form-group">
                    <input type="checkbox" name="feature2"  defaultChecked={pirate.feature2}/>
                    <p>Eye Patch</p>
            </div>
            <div className="form-group">
                    <input type="checkbox" name="feature2" defaultChecked={pirate.feature3} />
                    <p>Hook Hand</p>
            </div>
            
                <div className="form-grop row">
                <button type="submit" className="btn btn-primary">Add Pirate</button>
                </div>
        </form>
        </div>
    )
}

export default PirateForm
