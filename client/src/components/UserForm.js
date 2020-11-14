import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const UserForm = () => {
    
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password:'',
        confirmPassword:'',
    });
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password:'',
        confirmPassword:'',
    });

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", user)
            .then(res => {
            if(res.data.message === "error") {
                setErrors(res.data.data.errors);
                console.log(res.data.data)
                
            }
            else {
                navigate("/pirates")
            }
        })
        .catch(err => console.log(err))    
            
    }

return (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <h1>Welcome To Private Crew</h1>
            </nav>
        </div>
        <form onSubmit={ submitHandler } className="col-sm-10 offset-sm-1 mt-4">
        <div className="form-group row">
            {
                errors.first_name ?
                <span className="col-sm-8 offset-sm-4 text-danger">{ errors.first_name.message }</span>:
                <span className="col-sm-12"></span>
            }
            <label htmlFor="first_name" className="col-sm-4">First Name: </label>
            <input type="text" name="first_name" className="col-sm-8 form-control" onChange={ changeHandler } />
        </div>
        <div className="form-group row">
            {
                errors.last_name ?
                <span className="col-sm-8 offset-sm-4 text-danger">{ errors.last_name.message }</span>:
                <span className="col-sm-12"></span>
            }
            <label htmlFor="last_name" className="col-sm-4">Last Name: </label>
            <input type="text" name="last_name" className="col-sm-8 form-control" onChange={ changeHandler }/>
        </div>
        <div className="form-group row">
            {
                errors.email ?
                <span className="col-sm-8 offset-sm-4 text-danger">{ errors.email.message }</span>:
                <span className="col-sm-12"></span>
            }
            <label htmlFor="treasures" className="col-sm-4">Email: </label>
            <input type="text" name="email" className="col-sm-8 form-control" onChange={ changeHandler } />
        </div>
        <div className="form-group row">
            {
                errors.password ?
                <span className="col-sm-8 offset-sm-4 text-danger">{ errors.password.message }</span>:
                <span className="col-sm-12"></span>
            }
            <label htmlFor="password" className="col-sm-4">Password: </label>
            <input type="password" name="password" className="col-sm-8 form-control" onChange={ changeHandler } />
        </div>
        <div className="form-group row">
            {
                errors.confirmPassword ?
                <span className="col-sm-8 offset-sm-4 text-danger">{ errors.confirmPassword.message }</span>:
                <span className="col-sm-12"></span>
            }
            <label htmlFor="password" className="col-sm-4">Confirm Password: </label>
            <input type="password" name="confirmPassword" className="col-sm-8 form-control" onChange={ changeHandler } />
        </div>
        
            <div className="form-grop row">
            <button type="submit" className="btn btn-primary">Register</button>
            </div>
    </form>
    </div>
)

}

export default UserForm
