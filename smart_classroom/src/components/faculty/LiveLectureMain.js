import React, { useState, useEffect } from "react";
import img from "../../Assests/logo.PNG";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";
import Lectures from "./Lectures";

export default function LiveLectureMain() {
  const Navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserId(localStorage.getItem("fac_userId"));
    setUserName(localStorage.getItem("fac_userName"));
  }, [userId]);

  const editProfileHandler = () => {
    Navigate("editprofile");
  };
  const handleLogoutnavigate = () => {
    Navigate("/");
  };
  const postAssignmentHandler = () => {
    Navigate("postassignment");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 br">
            <img alt="Not found" src={img} style={{ marginLeft: "2rem" }}></img>
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
              className="btn btn-danger center "
              onClick={handleLogoutnavigate}>
              <LogoutIcon fontSize="small" />
              &emsp;Log out
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="cg2 ">
        <div className="row  m-0 p-0 ">
          <div className="col-sm-2  cg">
            <div>
              <button className="dash">Dashboard</button>
            </div>
            <div>
              <button className="dash" onClick={editProfileHandler}>
                Edit Profile
              </button>
            </div>
            <div>
              <button className="dash">Lectures</button>
            </div>
            <div>
              <button className="dash">Time Table</button>
            </div>
            <div>
              <button className="dash" onClick={postAssignmentHandler}>
                Post Asignments
              </button>
            </div>
            <div>
              <button className="dash">Progress Report</button>
            </div>
            <div>
              <button className="dash">Msg to Admiin</button>
            </div>
            <div>
              <button className="dash"> Msg to Students</button>
            </div>
          </div>
          <div className="col-sm-10 ">
            {/* {userId} */}
            <Lectures />
          </div>
        </div>
      </div>
    </>
  );
}
