import React ,{useState} from 'react'
import './StudentReg.css'

function StudentReg() {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[branch,setBranch]=useState();
    const[session,setSession]=useState();

  return (
    <>
        <div className='Stdregister-from-main'>

            <div className='Stdregister-form'>
            <h3 style={{backgroundColor:"crimson",padding:"5px"}}> Student Registration Form</h3>
                
                <form action="">
                    <div>
                        <label htmlFor="">Name :</label>
                        <input type="text" 
                            value={name}
                            placeholder='Enter name'
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Email :</label>
                        <input type="email" 
                            value={email}
                            placeholder='Enter Email'
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Branch: </label>
                    <select name="" id="" onChange={(e)=>setBranch(e.target.value)}>
                            <option value="">Branch</option>
                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="mechanical">ME</option>
                            <option value="civil">Civil</option>
                            <option value="ece">Electronics</option>

                    </select>
                    </div>

                    <div>
                        <label htmlFor="">Session :</label>
                        <input 
                            type="text" 
                            value={session}
                            placeholder='Enter Session as 2020-2024'
                            onChange={(e)=>{setSession(e.target.value)}}
                        />
                    </div>

                    <div>
                        <label htmlFor="">Password :</label>
                        <input 
                            type="email" 
                            value={password}
                            placeholder='Enter Password'
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                </form>
                <button style={{padding:"5px", fontWeight:"bolder"}}>Submit</button>
            </div>
            </div>
    </>
  )
}

export default StudentReg