import React from "react";
import img from "../../Assests/Loginimg.png";
import "./Login.css";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const roles = ["Student", "Faculty", "Admin"];
function Login() {
  const [modal, setModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Navigate = useNavigate();
  
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  //student login
  const studentLogin = (e) => {
    e.preventDefault();
    if (selectedRole === "Student") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM4MzMxZmMxZThhODI3ODFiYzAyOTgiLCJpYXQiOjE2ODE0MDQ3Nzh9.qNCzzWn0tWLEARgMj3GvL2oaA5TX6eYLmpVJOV2rZ80"
      );

      var data = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: data,
        redirect: "follow",
      };

      fetch("http://localhost:4000/api/v1/student/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success === false) {
            alert(result.message);
          } else {
            const _id = result.student._id;
            const _name = result.student.name;
            const _department = result.student.department;
            localStorage.setItem("std_userId", _id);
            localStorage.setItem("std_userName", _name);
            localStorage.setItem("std_department", _department);
            Navigate("/stddash");
          }
        })
        .catch((error) => console.log("error", error));
    } else if (selectedRole === "Faculty") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var data = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: data,
        redirect: "follow",
      };

      fetch("http://localhost:4000/api/v1/faculty/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success === false) {
            alert(result.message);
          } else {
            const _id = result.data._id;
            const _name = result.data.name;
            localStorage.setItem("fac_userId", _id);
            localStorage.setItem("fac_userName", _name);
            Navigate("/facdash");
          }
        })
        .catch((error) => console.log("error", error));
      // Navigate("/admindash")
    } else if (selectedRole === "Admin") {
      Navigate("/admindash");
    }
  };

  //navigation function
  const handleNavigation = () => {
    if (selectedRole == "Admin") {
      Navigate("/admindash");
    } else if (selectedRole == "Student") {
      Navigate("/stddash");
    } else if (selectedRole == "Faculty") {
      Navigate("");
    }
  };

  return (
    <>
      {/* forgot password model code start here  */}
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Forgot Your password
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="username">Email:</label>
              <input type="email" id="username" />
            </div>
            <div>
              <button className="btn btn-danger ml-4">Send Otp</button>
              <input
                type="text"
                placeholder=" enter rhe otp"
                className="ml-4"
                id="otp"
              />
              <button className="btn btn-success ml-4">Verify Otp</button>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confpassword">Confirm Password:</label>
              <input type="password" id="password" />
            </div>
            <button className="btn btn-secondary">Submit</button>
          </form>
        </ModalBody>
      </Modal>
      {/* forgot password model code end here  */}

      <div className="login-container">
        <div className="row">
          <div className="col-sm-6 left-side">
            <h1 className="p-2">Smart Classroom</h1>
            <img
              src={img}
              className="left-container"
              alt="image is loading...."></img>
          </div>
          <div className="col-sm-6">
            <div className="right-side mt-5">
              <span
                style={{
                  fontSize: "50px",
                  color: " #007bff",
                  alignItems: "center",
                }}>
                {" "}
                <AccessibleIcon color="primary" sx={{ fontSize: 50 }} /> Login
              </span>
              <form>
                <label htmlFor="role-select" className="label">
                  Select Role:
                </label>
                <select
                  id="role-select"
                  value={selectedRole}
                  onChange={handleRoleChange}
                  className="role-option">
                  {roles.map((role) => (
                    <option key={role} value={role} className="choose-role">
                      {role}
                    </option>
                  ))}
                </select>

                <div className="form-group">
                  <label htmlFor="username">Email:</label>
                  <input
                    type="email"
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={(e) => studentLogin(e)}>
                  Login
                </button>
                <a href="#" onClick={() => setModal(true)}>
                  Forgot password
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
