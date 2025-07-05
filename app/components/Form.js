import React from 'react'
import { useState } from 'react'

const Form = () => {
const [form, setform] = useState({name:"",email:"",message:""})
const [errorsubmit, seterrorsubmit] = useState(false)
const [isSubmitting, setisSubmitting] = useState(false)
const [issubmitted, setissubmitted] = useState(false)
const saveform=async(e)=>{
  setisSubmitting(true)
  e.preventDefault();
  if(form.name.length>=3 && form.email.length>=3 && form.message.length>=5){
    try{
const res=await fetch("api/email",{
method:"POST",
 headers:{
"Content-Type":"application/json",
},
body:JSON.stringify({...form})

});
if (!res.ok) {
          throw new Error(`Server responded with status: ${res.status}`);
        }
setform({name:"",email:"",message:""});
}
catch(err){
  console.error("Submission failed:", err);
}
finally{
setisSubmitting(false)
setissubmitted(true)
}
}

else{
  seterrorsubmit(true);
  setTimeout(()=>{
seterrorsubmit(false);
  },3000)
}
}

const handlechange=(e)=>{
  setform({ ...form,[e.target.name]:e.target.value })
}
  return (

    <div className='form bg-slate-800 rounded-2xl px-6 py-4 text-white flex flex-col h-fit '>
{issubmitted ? (
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-teal-400'>Thank You!</h2>
          <p>Your message has been sent successfully.</p>
          <p className="flex text-teal-400 justify-center">  
          <span><a href="https://www.linkedin.com/in/pragyan-ghimire-508717363/">🔗 LinkedIn: Pragyan1019</a> </span>
          </p>
        </div>
      ) : (
      <>
<h2 className='text-center font-semibold text-2xl mt-1 mb-3'>Get in Touch</h2> 
<form action="" className='flex flex-col gap-3' onSubmit={saveform}>
  <label htmlFor="name">Name:</label>
  <input type="text" id='name' name='name' value={form.name} onChange={handlechange} placeholder='Enter your full name' className='p-1 outline-none bg-none'/>
  <label htmlFor="email">Email:</label>
  <input type="email" id='email' name='email' value={form.email} onChange={handlechange} placeholder='Enter your email' className='p-1 outline-none bg-none'/>
  <label htmlFor="message">Message:</label>
  <textarea rows={4} type="text" name='message' id='message' value={form.message} onChange={handlechange} placeholder='Enter the message' className='p-1 outline-none overflow-y-auto'/>
    {errorsubmit && <p className='text-red-600 text-center'>Please submit correctly.</p>}

  <button type="submit" disabled={isSubmitting} className='border border-slate-300 rounded-2xl w-fit mx-auto px-3 py-1 hover:cursor-pointer hover:bg-slate-900 hover:scale-105 font-bold' >
    {isSubmitting ? 'Submitting':'Submit'}
  </button>
  </form> </> )} 
    </div>

    
  )
}

export default Form
