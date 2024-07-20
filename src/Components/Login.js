import React from 'react'

export default function Login() {
  return (
    <div>
        
        <div className="bg-cover bg-center h-screen" style={{
          backgroundImage: "url('Images/background.png')"
        }}>
       <div className='flex justify-center ....'>
            <p className='mt-96'>LOGIN</p><br/>
            <div>
            <input className='mt-96' type="text" id="username" name="username" placeholder='username' ></input> <br></br>
            <input className='mt-90' type="password" id="password" name="password" placeholder='password' ></input>
            </div>
        </div>
        </div>
       
    </div>
  )
}

