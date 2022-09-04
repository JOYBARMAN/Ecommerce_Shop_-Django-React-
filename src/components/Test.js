import React from 'react'
import { useState } from 'react'
import { domain } from '../env'
// import { Axios } from 'axios'

const Test = () => {
    const [title,setTitle]=useState(null)
    const [descrip,setDescrip]=useState(null)
    // const postRequest = async () => {
    //     await Axios({
    //         method: "POST",
    //         url:`${domain}/geeks/`,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         data: {
    //             'title': title,
    //             'description': descrip
    //         }
    //     }).then(function (response) {
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${domain}/geeks/`, {
           method: 'POST',
           body: JSON.stringify({
              title: title,
              description: descrip,
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((res) => res.json())
           .catch((err) => {
              console.log(err.message);
           });
     };
  return (
    <div>
        <h1>Test Post</h1>
        <form action="">
            <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }}/>
            <input type="text" placeholder='descrip' onChange={(e) => { setDescrip(e.target.value) }} />
            <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Test