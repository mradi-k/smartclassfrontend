import React ,{useState} from 'react'
import './StudentReg.css'

function StudentReg() {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[branch,setBranch]=useState();
    const[session,setSession]=useState();
    //student Register Api
    const registerStudent = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "name": name,
        "email":email,
        "session": session,
        "password": password,
        "branch": branch
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/api/v1/student/new", requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => console.log('error', error));
    }

  return (
    <>
        <div className='Stdregister-from-main'>
            <div className='Stdregister-form'>
                <h1>Student Registration Form</h1>
                <form action="" onSubmit={(e)=>registerStudent(e)}>
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
                            type="password" 
                            value={password}
                            placeholder='Enter Password'
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                   <div style={{width:"400px",margin:"0px auto"}}>
                        <button className='btn btn-danger' type='submit' style={{width:"20vw"}}>Submit</button>
                   </div>
                </form>
                
            </div>
            </div>
    </>
  )
}

export default StudentReg