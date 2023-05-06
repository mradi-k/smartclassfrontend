import React, { useState, useEffect } from "react";
import img from "../../Assests/logo.PNG";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

export default function Studentdashboard() {
  const Navigate = useNavigate();
  // const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    // setUserId(localStorage.getItem("std_userId"));
    setUserName(localStorage.getItem("std_userName"));
    // if(!userId) {
    //     console.log("Token Not Avilable");
    //     console.log(userId);
    // }
  });

  const editProfileHandler = () => {
    Navigate("editprofile");
  };
  const dashBord = () => {
    Navigate("/stddash");
  };
  const showAssignment = () => {
    Navigate("/stddash/assignments");
  };
  const handleLogoutnavigate = () => {
    Navigate("/");
  };
  // const handleStudentbot = () =>{
  //     Navigate('/http://127.0.0.1:5173/');
  // }

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
              <button className="dash">Time Table</button>
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
            <h4>Hi !{userName} SmartClassroom Welcomes's you in the Class</h4>
          </div>
        </div>
      </div>
    </>
  );
}
