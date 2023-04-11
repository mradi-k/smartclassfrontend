import React ,{useState} from 'react'
import './StudentReg.css'

function FacultyReg() {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[department,setDepartment]=useState();
    //Faculty Register Api
    const registerStudent = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "name": name,
        "email":email,
        "department":department,
        "password": password,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/api/v1/faculty/new", requestOptions)
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
                <h1>Faculty Registration Form</h1>
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
                        <label htmlFor="">Select Department: </label>
                    <select name="" id="" onChange={(e)=>setDepartment(e.target.value)}>
                            <option value="">Department</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ME">ME</option>
                            <option value="CIVIL">Civil</option>
                            <option value="ECE">Electronics</option>

                    </select>
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

export default FacultyReg;