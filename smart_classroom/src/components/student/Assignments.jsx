import React, {useState, useEffect } from 'react'

import img from "../../Assests/logo.PNG";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from 'react-router-dom';

const Assignments = () => {
    const [assignData,setAssignmentData]=useState();
    // const [department, setDepartment]=useState();
     const Navigate =useNavigate();
    const loadAssignment = () =>{
        // console.log(department);
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyNDI5OTdmOTEwOGFhZjBjOTQwZDQiLCJpYXQiOjE2ODIwNjQwMjZ9.3GWOsZUggrh4YgQb6-0FbF01UJ4hobp7Grf4Py2NHEI");
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/api/v1/assignment/"+localStorage.getItem("std_department"), requestOptions)
        .then(response => response.json())
        .then(result => {
            setAssignmentData(result.assignment);
        })
        .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        // setDepartment();
        // console.log(localStorage.getItem("std_department"));
        loadAssignment();
    })
    const editProfileHandler = () => {
        Navigate("/stddash/editprofile");
      };
      const dashBord = () => {
        Navigate("/stddash");
      };
      const showAssignment = () => {
        Navigate("");
      };
      const timeTable = () =>{
        Navigate('/stddash/timetable');
      }
      const handleLogoutnavigate = () => {
        Navigate("/");
      };
  return (
   <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 br">
            <img src={img} style={{ marginLeft: "2rem" }} alt="not found"></img>
          </div>
          <div className="col-sm-6 br2 ">
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#3f51b5",
              }}>
              <DashboardIcon sx={{ fontSize: 50 }} color="primary" />{" "}
              &nbsp;Dashboard
            </p>
          </div>
          <div></div>
          <div className="col-sm-3 br3">
            <button
              className="btn btn-danger center"
              onClick={handleLogoutnavigate}>
              <LogoutIcon fontSize="small" />
              &emsp;Log out
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="cg2 ">
        <div className="row m-0 p-0 ">
          <div className="col-sm-2  cg">
            <div>
              <button className="dash" onClick={dashBord}>
                Dashboard
              </button>
            </div>
            <div>
              <button className="dash" onClick={editProfileHandler}>
                Edit Profile
              </button>
            </div>
            <div>
              <button className="dash">Live Lectures</button>
            </div>
            <div>
              <button className="dash" onClick={timeTable} >Time Table</button>
            </div>
            <div>
              <button className="dash" onClick={showAssignment}>
                Assignments
              </button>
            </div>
            <div>
              <button className="dash">Progress Report</button>
            </div>
            <div>
              <button className="dash">Msg to faculty</button>
            </div>
            <div>
              <a className="dash btn" href="http://127.0.0.1:5173/">
                Student ChatBot
              </a>
            </div>
          </div>

          <div className="col-sm-10">
            {/* {userId} */}
            {
                assignData?(
                    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                    {assignData.map((item,index)=>{
                        return (
                            
                                <div style={{width:"auto",height:"auto",background:"blue",color:"white",padding:"20px",margin:"20px"}} key={index}>
                                    <h2>Department:<span style={{color:"",fontStyle:"italic"}}>{item.department}</span></h2>
                                    <h3>Subject:{item.subject}</h3>
                                    <p>Subbmission Date:{item.submissionDate}</p>
                                    <p>{}</p>
                                </div>
                            
                        )
                    })}
                    </div>
                ):(
                    <h1>Not Found</h1>
                )
            }
          </div>
        </div>
      </div>
   </> 
  )
}

export default Assignments