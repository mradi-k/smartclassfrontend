import React from "react";
import "./AdminDas.css";
import img from "../../Assests/logo.PNG";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
// import StudentReg from './StudentReg'import
import Time from "../templetes/Timetable";

function Timetable() {
  const Navigate = useNavigate();
  const handleNaigateDas = () => {
    Navigate("/admindash");
  };
  const handleNavigateFac = () => {
    Navigate("/admindash/facultyregister");
  };
  const handleStdReg = () => {
    Navigate("/admindash/stdregister");
  };
  const handleLogoutnavigate = () => {
    Navigate("/");
  };
  return (
    <>
      <div className="admin-dash-main">
        <div className="row">
          <div className="col-sm-3 br">
            <img src={img} style={{ marginLeft: "2rem" }}></img>
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
        <div className="row container ">
          <div className="col-sm-3  cg">
            <div>
              <button className="dash" onClick={handleNaigateDas}>
                Dashboard
              </button>
            </div>
            <div>
              <button className="dash" onClick={handleStdReg}>
                Student Register
              </button>
            </div>
            <div>
              <button className="dash" onClick={handleNavigateFac}>
                Faculty Register
              </button>
            </div>
            <div>
              <button className="dash">Admin Register</button>
            </div>
            <div>
              <button className="dash">Time Table</button>
            </div>
            <div>
              <button className="dash">Progress Report</button>
            </div>
            <div>
              <button className="dash">Faculty Msg</button>
            </div>
            <div>
              <button className="dash">Admin Msg</button>
            </div>
          </div>
          <div className="col-sm-9">
            <Time />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timetable;
