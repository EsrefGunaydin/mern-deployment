import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const LoginForm = () => {
    
    const [user, setUser] = useState({
        email: '',
        password:'',
    });
    const [errors, setErrors] = useState({
        email: '',
        password:'',
    });

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(user)
        axios.post("http://localhost:8000/api/login", user)
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                    console.log(res)
                }
                else {
                    navigate("/pirates")
                }
                    console.log(res)
            })
            .catch(err => console.log(err))    
    }

return (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <h1>Login</h1>
            </nav>
        </div>
        <form onSubmit={ submitHandler } className="col-sm-10 offset-sm-1 mt-4">
        
        
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
        
            <div className="form-grop row">
            <button type="submit" className="btn btn-primary">Login</button>
            </div>
    </form>
    </div>
)

}

export default LoginForm
