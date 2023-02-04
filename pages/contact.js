import React, { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  function submitHandler(e){
    e.preventDefault()
    const obj = {
      name,email,number
    }

    axios.post("http://localhost:3000/api/postcontact",obj)

    setEmail("")
    setName("")
    setNumber("")

    alert("Contact data saved successfully !!")
  }

  return (
    <div>
        <h1 className='text-2xl text-center mt-5'>Contact Us</h1>
        <form className='flex flex-col items-center' onSubmit={submitHandler}>

          <div className='m-1 flex flex-col'>
          <label>Enter your Name</label>
          <input className='border border-black rounded-md w-full' value={name} onChange={e => setName(e.target.value)}/>
          </div>

          <div className='m-3 flex flex-col'>
          <label>Enter your Email</label>
          <input className='border border-black rounded-md' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>

          <div className=' flex flex-col'>
          <label>Enter your Phone Number</label>
          <input className='border border-black rounded-md' value={number} type='tel' onChange={e => setNumber(e.target.value)}/>
          </div>

          <div>
            <button className='bg-gray-900 w-full p-1 mt-2 text-white rounded-md'>SUBMIT</button>
          </div>

        </form>
    </div>
  )
}

export default Contact