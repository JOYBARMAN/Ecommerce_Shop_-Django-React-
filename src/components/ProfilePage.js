import React ,{useEffect} from 'react'
import { useGlobalState } from '../state/provider'
import { useState } from 'react'
import axios from 'axios'
import { domain, header, token } from "../env";

const ProfilePage = () => {
  const [{ profile }, dispatch ] = useGlobalState()
  const [email,setEmail]=useState("")
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")

  const getProfile = () => {
    axios.get(`${domain}/profile/`, { headers: header })
      .then((response) => {
        const data = response.data.data.prouser
        setEmail(data.email)
        setFirstName(data.first_name)
        setLastName(data.last_name)
      })
      .catch(error => console.error(`Error : ${error}`))
  }

  const updateProfile = (e) => {
    e.preventDefault();
    axios({
        method: 'post',
        url: `${domain}/updateprofile/`,
        data: {
            "first_name": firstName,
            "last_name": lastName,
            "email" : email,
        },
        headers:header
    }).then(function (response) {
      dispatch ({
        type : "PAGE_RELOAD",
        pagereload : response.data
      })
      console.log("sucess res", response)
    }).catch(function (error) {
        console.log(error);
    });
}

  useEffect(() => {
    if (token !== null) {
      getProfile()
    }
  }, [])

  return (
    <div className='container'>
      <h1 className="text-center text-danger fw-bold">Profile Page</h1>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <img className='rounded-circle' src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg" alt="" height="150px" width="150px" />
          <h2 className='my-2'>{profile?.prouser?.username}</h2>
          <h6 className='my-2'>{profile?.prouser?.email}</h6>
          <h6 className='my-2'>{profile?.prouser?.first_name} {profile?.prouser?.last_name}</h6>
          <div className='my-3'>

            <div className="form-group my-2">
              <label htmlFor="image">Profile Image</label>
              <input type="file" className="form-control"/>
              <button className='btn btn-primary my-2'>Upload</button>
            </div>

            <div className="form-group my-2">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email}/>
            </div>

            <div className="form-group my-2">
              <label htmlFor="FirstName">First Name</label>
              <input type="text" className="form-control" onChange={(e) => { setFirstName(e.target.value) }} value={firstName}/>
            </div>

            <div className="form-group my-2">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" className="form-control" onChange={(e) => { setLastName(e.target.value) }} value={lastName}/>
            </div>
            <button onClick={updateProfile} className='btn btn-success my-2'>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage