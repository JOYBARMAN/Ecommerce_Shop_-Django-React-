import React from 'react'
import { domain } from '../env'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate()

    const loginRequest = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${domain}/login/`,
            data: {
                "username": username,
                "password": password,
            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(function (response) {
            window.localStorage.setItem("token", response.data['token'])
            navigate('/')
        }).catch(function (error) {
            console.log(error);
            window.alert("Invalid Username or Password")
        });
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch(`${domain}/login/`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username: username,
    //             password: password,
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((res) => res.json())
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // };
    return (
        <div>
            <div className="container">
                <h1 className='text-center text-danger fw-bold my-2'>Login Page</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form method='post'>
                            <div className="mb-3">
                                <input type="text" onChange={(e) => { setUsername(e.target.value) }} className="form-control" id="username" placeholder='Enter Your Username' />
                            </div>
                            <div className="mb-3">
                                <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder='Enter Password' />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={loginRequest}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage