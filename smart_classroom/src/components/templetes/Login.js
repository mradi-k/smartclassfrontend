import React from 'react'
import './Login.css'
import { useFormik, useFormikContext } from 'formik'
import { Link , useNavigate} from 'react-router-dom'

const initialValues={
    username:"",
    password:""
}
const Login = () => {
    const {values , errors, touched, handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        onSubmit :(values) =>{
            log(values);
        }
    })

    const toggleshow=()=>{
        var x = document.getElementById("pass");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const navigate = useNavigate();
    const log = (a) =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "email": a.username,
        "password":a.password
        });
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };
        fetch("http://localhost:5000/login", requestOptions)
        .then(response => response.json())
        .then(result =>{
             console.log(result)
                if(result.status){
                    // navigate('/home');
                }
            })
        .catch(error => console.log('error', error));
    }

  return (
    <div className='login-container'>
        <div className='left-container'>
            <h1>Smart ClassRoom</h1>
        </div>
        <div className='right-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{color:"white",fontSize:"1rem", fontWeight:"bold"}}>
                        Select Your Login type:
                        <select>
                            <option value="male">Student</option>
                            <option value="female">Faculty</option>
                            <option value="nonbinary">Admin</option>
                        </select>
                    </label>
                    <br />
                    <input 
                        placeholder='username or email' 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div >
                    <input 
                        placeholder='password' 
                        type='password'
                        name='password' 
                        id="pass"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <div style={{position:"relative", display:"inline", right:"20px", color:"white"}}><i className="fa fa-eye"  onClick={toggleshow} aria-hidden="true"></i></div>
                </div>
                <div>
                    <button to='/home' className='btn-login' type='submit'>Log In</button> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;
